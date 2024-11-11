import { queryOptions, QueryOptions } from "@tanstack/react-query";

export const tempOptions = queryOptions({
    queryKey:['temp'],
    queryFn: async()=>{
        const response = await fetch('http://127.0.0.1:5000/api/data?type=temp')
        return response.json()
    },
    refetchInterval: 1000,
})

export const humidOptions = queryOptions({
    queryKey:['humid'],
    queryFn: async()=>{
        const response = await fetch('http://127.0.0.1:5000/api/data?type=humid')
        return response.json()
    },
    refetchInterval: 1000,
})