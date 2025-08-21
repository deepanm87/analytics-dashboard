import Header from "@/components/header/header"
import { AnalyticsInfo } from "@/components/analytics-info/analytics-info"
import Dashboard from "@/components/dashboard"
import { DashboardSkeleton } from "@/components/dashboard/skeleton"
import Insights from "@/components/insights"
import { InsightsSkeleton } from "@/components/insights/skeleton"
import Search from "@/components/search"
import  SearchSkeleton from "@/components/search/skeleton"
import VisitorFilter from "@/components/visitor-filler"
import { VisitorFilterSkeleton } from "@/components/visitor-filler/skeleton"
import { getJourneyInsights, getVisitorFilters } from "@/lib/analytics"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "provides real time data of visitors, revenue, bounce rate and session time for nextjscourse.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const journeysPromise = getJourneyInsights()
  const visitorFiltersPromise = getVisitorFilters()

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable}  antialiased`}
      >
        <Header />
        <main className="p-6 flex flex-col gap-6 pb-24 container mx-auto group">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black text-black bg-yellow-300 inline-block px-2 py-2 border-4
            border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Analytics Info
            </h1>
            <AnalyticsInfo />

            <Suspense fallback={<DashboardSkeleton />}>
              <Dashboard />
            </Suspense>

            <Suspense fallback={<InsightsSkeleton />}>
              <Insights journeysPromise={journeysPromise} />
            </Suspense>

            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>

            <Suspense fallback={<VisitorFilterSkeleton />}>
              <VisitorFilter visitorFiltersPromise={visitorFiltersPromise} />
            </Suspense>
            
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
