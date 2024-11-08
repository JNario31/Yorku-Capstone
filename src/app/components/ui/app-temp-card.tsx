"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HomeTempChart from "./app-temp-chart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
                    <HomeTempChart/>
                </QueryClientProvider>
            </CardContent>
        </Card>
    );
}