import {
    Analytics,
    AnalyticsInfo,
    VisitorJourney,
    VisitorFilter
} from "@/prisma/app/generated/prisma/client"

export type AnalyticsResponse = Analytics[]
export type JourneyInsightResponse = VisitorJourney[]
export type VisitorFiltersResponse = VisitorFilter[]
export type AnalyticsInfoResponse = AnalyticsInfo | null

export interface AnalyticsItem {
    id: string
    date: Date
    visitors: number
    pageViews: number
    bounceRate: number
    avgTimeOnSite: number
}

export interface JourneyInsightItem {
    id: string
    completedAt: Date
    path: string
    duration: number
    exitPage: string
    referrer: string
}

export interface VisitorFilterItem {
    id: string
    type: string
    value: string
    count: number
}

export interface FilterPreferences {
    browsers?: string[]
    sources?: string[]
    os?: string[]
    [key: string]: string[] | undefined
}