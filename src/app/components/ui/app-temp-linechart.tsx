import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { useQuery } from "@tanstack/react-query"
import { tempOptions } from "@/app/lib/data"
import { TempData } from "@/app/lib/definitions"
import { useEffect, useRef, useState } from "react"

export default function HomeTempLineChart(){

    const {data, isLoading, error} = useQuery(tempOptions)
    const chartDataRef = useRef<TempData[]>([]);
    
    const [chartData, setChartData] = useState<TempData[]>([]);
   
   useEffect(()=>{
     if(data) {
       const newData: TempData = {
         temp: data.temp,
         timestamp: new Date().toLocaleTimeString(),
       };
   
       chartDataRef.current.push(newData);
       const latestData = chartDataRef.current.slice(-90)
       setChartData(latestData);
     }
   },[data]);
   
   if(isLoading) return <h1>loading...</h1>
   if (error instanceof Error) return <h1>Error: {error.message}</h1>;
   console.log('Chart Data:', chartData);
   
  const chartConfig = {
    bergeron: {
      label: "Bergeron",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
   
     return (   
      <ChartContainer config={chartConfig}>
       <LineChart
         accessibilityLayer
         data={chartData}
         margin={{
           left: 12,
           right: 12,
         }}
         width={800}
         height={400}
       >
         <CartesianGrid vertical={false} />
         <XAxis
           dataKey="timestamp"
           tickLine={false}
           axisLine={false}
           tickMargin={8}
           tickFormatter={(value) => value.slice(0, 10)}
         />
         <Tooltip/>
         <Line
           dataKey="temp"
           type="natural"
           stroke="var(--color-bergeron)"
           strokeWidth={2}
           dot={false}
           isAnimationActive={false}
         />
       </LineChart>
      </ChartContainer>
         
     )
   }