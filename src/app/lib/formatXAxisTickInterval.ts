export function formatXAxisTickInterval( timeRange:  string): number{
    if(timeRange==="1min"){
        return 4
    }
    else if (timeRange === "1h"){
        return 3
    }else if (timeRange === "24h"){
        return 2
    }else {
        return 1
    }

}