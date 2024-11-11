import { CartesianGrid, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

import { useQuery } from "@tanstack/react-query"
import { tempOptions } from "@/app/lib/data"
import { TempData } from "@/app/lib/definitions"
import { useEffect, useRef, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { filterData } from "@/app/lib/filterData"
import { formatXAxisTick } from "@/app/lib/formatXAxisTick"
import { TimeRangeSelect } from "./TimeRangeSelect"
import { formatXAxisTickInterval } from "@/app/lib/formatXAxisTickInterval"

export default function HomeTempLineChartFiltered(){

    const {data, isLoading} = useQuery(tempOptions)
    const chartDataRef = useRef<TempData[]>([]);
    const [chartData, setChartData] = useState<TempData[]>([]);
    const [timeRange, setTimeRange] = useState("7d")
   
    /**
     * Use effect adds new data to chartDataRef to be filtered
     */
   useEffect(()=>{
     if(data) {
       const newData: TempData = {
         temp: data.temp,
         timestamp: new Date().toLocaleString(),
       };
   
       chartDataRef.current.push(newData);
       const latestData = chartDataRef.current
       setChartData(latestData);
     }
   },[data]);

   /**
    * Filter data according to specified time ranges from TimeRangeSelect, see filterData.ts
    */
   const filteredData=filterData(chartData,timeRange)
  
   
   if(isLoading) return <h1>loading...</h1>
   console.log('Chart Data:', chartData);
   
   console.log('Filtered Data:', filteredData);

  const chartConfig = {
    bergeron: {
      label: "Bergeron",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig
   
     return (   
      <div>
      {/*Table selection for last 7 days, 24 hours, and Last Hour*/}
      <TimeRangeSelect timeRange={timeRange} setTimeRange={setTimeRange}/>
      <ChartContainer config={chartConfig}>
       <LineChart
         accessibilityLayer
         data={filteredData}
         margin={{
           left: 0,
           right: 50,
         }}
       >
         <CartesianGrid vertical={false} />
          {/*Format X axis based on what time range is selected, see formatXAxisTick.ts*/}
         <XAxis
           dataKey="timestamp"
           tickLine={true}
           axisLine={true}
           tickMargin={8}
           tickFormatter={(value)=>formatXAxisTick(value, timeRange)}
           interval={(formatXAxisTickInterval(timeRange))}
         />
         <YAxis/>
         <Tooltip/>
         <ReferenceLine y={21} stroke="pink" strokeDasharray={"3 3"}/>
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
      </div>
         
     )
   }