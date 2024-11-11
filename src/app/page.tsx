import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeTempFilteredCard } from "./components/app-temp-filtered-card";

export const runtime = 'edge'


export default function Home() {

  return (
    <>
    <div className="grid grid-cols-2 gap-0">
      <div className="basis-3/4 p-6">
        {<HomeTempFilteredCard/>}
      </div>
      <div className="basis-3/4 p-6">
        {<Card>
          <CardHeader>
            <CardTitle>Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            Add Chart
          </CardContent>
        </Card>}
      </div>
      <div className="basis-3/4 p-6">
        {<Card >
          <CardHeader>
            <CardTitle>Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            Add Chart
          </CardContent>
        </Card>}
      </div>
  
    </div>
    </>
   
  );
}
