export type DateRange = {
    gte?: Date
    lte?: Date
}

export interface ChartData {
    name: string
    value: number
}

export interface VisitorChartProps {
    data: ChartData[]
}

export type PageProps = {
    params: Promise<{
        insight: string
    }>
    searchParams: Promise<{
        q?: string
    }>
}

export type CountryCodeMap = {
    [key: string]: string
}