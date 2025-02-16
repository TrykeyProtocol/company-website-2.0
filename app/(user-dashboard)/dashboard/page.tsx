import DashboardCard from "@/library/components/atoms/dashboard-card";
import { LineGraph } from "@/library/components/organisms/line-graph";
import { RadialChart } from "@/library/components/organisms/radial-graph";
import DashboardLayout from "@/library/components/templates/dashboard-layout-wrapper";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className=" flex flex-col gap-4">
        <div className="flex overflow-x-auto gap-4">
          <DashboardCard />
          <DashboardCard />
        </div>
        <h1 className=" font-bold text-xl">Yield Analytics</h1>
        <LineGraph />
        <RadialChart />
      </div>
    </DashboardLayout>
  );
};

export default page;
