import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeTempChart } from "./app-temp-chart";

export function HomeTempCard(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Temperature</CardTitle>
                <CardDescription>Building: Bergeron, PetrieA, PetrieB</CardDescription>
            </CardHeader>
            <CardContent><HomeTempChart/></CardContent>
        </Card>
    );
}