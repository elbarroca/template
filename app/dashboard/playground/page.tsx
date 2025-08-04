import { CustomDataTable } from "@/components/ui/custom-data-table";
import { createClient } from "@/lib/supabase/server";
import {
  SidebarInset,
} from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // This` should not happen if the page is protected by middleware
    return <div>User not found.</div>;
  }

  const userData = [
    {
      id: user.id,
      name: user.user_metadata.full_name || 'N/A',
      email: user.email || 'N/A',
      plan: user.user_metadata.plan || 'Free',
      status: user.email_confirmed_at ? 'Active' : 'Pending',
      lastLogin: user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'N/A',
      avatar: user.user_metadata.avatar_url || `https://api.dicebear.com/8.x/lorelei/svg?seed=${user.id}`
    }
  ];

  return (
    <SidebarInset>
      <div className="@container/main flex w-full min-w-0 flex-1 flex-col overflow-auto">
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <h2 className="text-xl font-semibold">User Authentication Data</h2>
          <CustomDataTable data={userData} />
        </div>
      </div>
    </SidebarInset>
  )
}
