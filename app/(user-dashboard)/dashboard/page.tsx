import { Card, CardContent } from "@/library/components/atoms/card";
import DashboardCard from "@/library/components/atoms/dashboard-card";
import { BarChartComponent } from "@/library/components/organisms/bar-chart";
import { LineGraph } from "@/library/components/organisms/line-graph";
import { RadialChart } from "@/library/components/organisms/radial-graph";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className=" flex flex-col gap-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-bold text-xl">Assets</h2>
          <div className="flex items-center text-gray-400 text-xs">
            <Link href={"/dashboard/view-all"}>View all</Link>
            <ChevronRight size={20} />
          </div>
        </div>
        <div className="flex overflow-x-auto gap-4">
          <DashboardCard />
          <DashboardCard />
        </div>

        <h2 className="font-bold text-xs mt-2">Today&apos;s analytics</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 flex flex-col items-center gap-1">
              <h3 className="text-xl font-bold text-lightMode-brand-primary">70</h3>
              <p className="text-gray-700 text-sm">Active fleets</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center gap-1">
              <h3 className="text-xl font-bold text-lightMode-brand-primary">₦20,0000</h3>
              <p className="text-gray-700 text-sm">Yield Generated</p>
            </CardContent>
          </Card>
        </div>

        <BarChartComponent />
        {/* <LineGraph /> */}
        <RadialChart />
      </div>
    </DashboardLayout>
  );
};

export default page;
