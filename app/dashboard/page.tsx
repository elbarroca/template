import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
} from "@/components/ui/sidebar"
import data from "./data.json"

export default function Page() {
  return (
    <SidebarInset>
      <div className="@container/main flex w-full min-w-0 flex-1 flex-col overflow-auto">
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <SectionCards />
          <div className="grid auto-rows-min grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-6">
            <ChartAreaInteractive />
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
