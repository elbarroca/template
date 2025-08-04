import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }
    return new NextResponse(`Webhook Error: Unknown error`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === 'checkout.session.completed') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
      { expand: ['items.data.price.product'] }
    )

    const product = subscription.items.data[0]?.price?.product as Stripe.Product;
    let role: UserRole = 'free';

    // Replace with your actual Stripe Product IDs
    if (product.id === process.env.STRIPE_PRO_PRODUCT_ID) {
      role = 'pro';
    } else if (product.id === process.env.STRIPE_BASIC_PRODUCT_ID) {
      role = 'basic';
    }

    const supabase = await createClient()

    await supabase
      .from('profiles')
      .update({ stripe_subscription_id: subscription.id, role: role as string })
      .eq('stripe_customer_id', session.customer as string)
  } else if (event.type === 'customer.subscription.deleted') {
    const supabase = await createClient();
    await supabase
      .from('profiles')
      .update({ stripe_subscription_id: null, role: 'free' })
      .eq('stripe_customer_id', session.customer as string)
  }

  return new NextResponse(null, { status: 200 })
}