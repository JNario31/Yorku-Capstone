import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomeTempCard } from "./components/ui/app-temp-card";
import HomeTempChart from "./components/ui/app-temp-chart";



export const runtime = 'edge'


export default function Home() {

  return (
    <>
   {<HomeTempCard/>} 
    </>
   
  );
}
