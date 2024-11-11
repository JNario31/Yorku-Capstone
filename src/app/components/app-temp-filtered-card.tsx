"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeTempLineChartFiltered from "./ui/app-temp-filtered-chart";


const queryClient = new QueryClient();

export function HomeTempFilteredCard(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Temperature</CardTitle>
                <CardDescription>Building: Bergeron, PetrieA, PetrieB</CardDescription>
            </CardHeader>
            <CardContent>
                <QueryClientProvider client={queryClient}>
                    <HomeTempLineChartFiltered/>
                </QueryClientProvider>
            </CardContent>
        </Card>
    );
}