

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query"
import { tempOptions } from "@/app/lib/data"
import { TempData } from "@/app/lib/definitions"
import { useEffect, useState } from "react"
import { timeStamp } from "console"

export const description = "Temperature Chart"

/*

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
              tickFormatter={(value) => value.slice(0, 6)}
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
*/

export default function HomeTempChart(){

 const {data, isLoading, error} = useQuery(tempOptions)
 const [chartData, setChartData] = useState<TempData[]>([]);
 useEffect(() => {
  if (data) {
    setChartData((prevData) => [
      ...prevData,
      {
        temp: data.temp,
        timestamp: new Date().toLocaleTimeString(), // Call the function to get the timestamp
      },
    ]);
  }
}, [data].slice(-10));

if(isLoading) return <h1>loading...</h1>
if (error instanceof Error) return <h1>Error: {error.message}</h1>;
console.log('Chart Data:', chartData);
  return(
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="red" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
 
}
