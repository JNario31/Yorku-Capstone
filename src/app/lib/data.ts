import { queryOptions, QueryOptions } from "@tanstack/react-query";

export const tempOptions = queryOptions({
    queryKey:['temp'],
    queryFn: async()=>{
        const response = await fetch('http://127.0.0.1:5000/api/data')
        return response.json()
    },
    refetchInterval: 1000,
})