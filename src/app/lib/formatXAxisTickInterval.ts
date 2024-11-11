export function formatXAxisTickInterval( timeRange:  string, screenSizes: {isLaptop: boolean, isDesktop: boolean }): number{
    
    if(screenSizes.isLaptop){
        if(timeRange==="1min"){
            return 20
        }
        else if (timeRange === "1h"){
            return 23
        }else if (timeRange === "24h"){
            return 25
        }else {
            return 28
        }
    }else if(screenSizes.isDesktop){
        if(timeRange==="1min"){
            return 10
        }
        else if (timeRange === "1h"){
            return 15
        }else if (timeRange === "24h"){
            return 20
        }else {
            return 25
        }
    }

    return 25;

    

}