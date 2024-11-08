"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeTempLineChart from "./app-temp-linechart";

const queryClient = new QueryClient();

export function HomeTempCard(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Temperature</CardTitle>
                <CardDescription>Building: Bergeron, PetrieA, PetrieB</CardDescription>
            </CardHeader>
            <CardContent>
                <QueryClientProvider client={queryClient}>
                    <HomeTempLineChart/>
                </QueryClientProvider>
            </CardContent>
        </Card>
    );
}