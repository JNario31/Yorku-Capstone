
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { HomeTempCard } from "./components/ui/app-temp-card";
import { temperatureOptions } from "./data-fetching/data";
import { getQueryClient } from "./data-fetching/get-query-client";
import { TempData } from "./components/tempData";

export const runtime = 'edge'




export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(temperatureOptions)
  return (
    <>
    <HomeTempCard/>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TempData/>
    </HydrationBoundary>
    </>
   
  );
}
