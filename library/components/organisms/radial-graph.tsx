"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../atoms/chart";
const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

const chartConfig = {
  desktop: {
    label: "Expected yield",
    color: "#FDEEE8",
  },
  mobile: {
    label: "Generated yield",
    color: "#EA5016",
  },
} satisfies ChartConfig;

export function RadialChart() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card className="flex flex-col">
      <CardHeader className=" pb-0">
        <div className=" flex items-center justify-between">
          <p className=" ">Expected Yield</p>
          <p className=" text-xs border px-4 py-1 border-gray-700 rounded">
            Monthly
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={95}
            outerRadius={140}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground text-green-500"
                        >
                          +1.34% ↗
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm -mt-24">
        <div className=" bg-[#FDEEE8] rounded-md flex justify-between items-center p-2 w-full px-8">
          <div className=" flex flex-col items-center">
            <p className=" text-sm ">Expected Yield</p>
            <p className=" text-sm font-bold">₦260000</p>
          </div>

          <div className=" flex flex-col items-center">
            <p className=" text-sm ">Generated yield</p>
            <p className=" text-sm font-bold">₦160000</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
