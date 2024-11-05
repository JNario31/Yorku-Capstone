"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useSuspenseQuery } from "@tanstack/react-query"
import { temperatureOptions } from "@/app/data-fetching/data"

export const description = "Temperature Chart"



const chartData = [
  { date: "January", bergeron: 186 },
  { date: "February", bergeron: 305 },
  { date: "March", bergeron: 237 },
  { date: "April", bergeron: 73 },
  { date: "May", bergeron: 209 },
  { date: "June", bergeron: 214 },
]

const chartConfig = {
  bergeron: {
    label: "Bergeron",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function HomeTempChart() {
  const { data } = useSuspenseQuery(temperatureOptions)
  return (
        <ChartContainer config={chartConfig}>
          <LineChart
            
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              isAnimationActive={false}
            />
            <Line
              dataKey="temperature"
              type="natural"
              stroke="var(--color-bergeron)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
  )
}
