import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && session) {
      const { user } = session;
      // Fetch existing profile
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("stripe_customer_id")
        .eq("id", user.id)
        .single();

      let customerId = existingProfile?.stripe_customer_id;

      // If no profile exists, create one
      if (!existingProfile) {
        await supabase.from("profiles").insert({ id: user.id, email: user.email });
      }

      // If no stripe_customer_id exists for the profile, create one
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.user_metadata.full_name || user.email, // Fallback to email if full_name is null
        });
        customerId = customer.id;

        await supabase
          .from("profiles")
          .update({ stripe_customer_id: customer.id })
          .eq("id", user.id);
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/error`);
}
