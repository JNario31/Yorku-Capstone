import { HumidData, TempData } from "./definitions";

export function filterData(chartData: TempData[] | HumidData[], timeRange: string){
    const referenceDate = new Date();
    let startDate: Date;

    const aggregatedData: {[key:string]: TempData[] | HumidData[]}={};

    chartData.forEach((item)=>{
        const date = new Date(item.timestamp);
        let key: string;
    
        if (timeRange === "7d") {
          key = date.toLocaleDateString(); // Group by day (e.g., '2024-11-01')
        } else if (timeRange === "24h") {
          key = `${date.getHours()}:${date.getMinutes()}`; // Group by hour (e.g., '14:30')
        } else if (timeRange === "1h") {
          key = `${date.getHours()}:${date.getMinutes()}`; // Group by minute (e.g., '14:30')
        } else if (timeRange === "1min"){
          key = `${date.getMinutes()}:${date.getSeconds()}`;
        }else {
          // Default, return all data points (this could be adjusted if needed)
          return chartData;
        }
    
        // Group data points by the calculated key (day/hour/minute)
        if (!aggregatedData[key]) {
          aggregatedData[key] = [];
        }
        aggregatedData[key].push(item);
    })

    if (timeRange === "7d") {
        startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - 7);
      } else if (timeRange === "24h") {
        startDate = new Date(referenceDate);
        startDate.setHours(startDate.getHours() - 24);
      } else if (timeRange === "1h") {
        startDate = new Date(referenceDate);
        startDate.setHours(startDate.getHours() - 1);
      } else if (timeRange === "1min"){
        startDate = new Date(referenceDate);
        startDate.setMinutes(startDate.getMinutes() - 1);
      }

    return Object.values(aggregatedData)
    .map((group) => group[0]) // Only return the first data point from each group
    .filter((item) => {
    const date = new Date(item.timestamp);
    return date >= startDate; // Filter by the start date/time
    });
}
