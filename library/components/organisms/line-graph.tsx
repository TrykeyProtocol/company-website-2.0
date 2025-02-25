"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../atoms/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../atoms/card";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#EE774A",
  },
} satisfies ChartConfig;

export function LineGraph() {
  return (
    <Card>
      <CardHeader>
        <div className=" flex items-center gap-1">
          <p className=" font-semibold">₦260000.00</p>
          <p className=" font-medium text-xs text-gray-400 whitespace-nowrap">
            Total Yield Generated
          </p>
          <div className=" p-1 rounded-full bg-green-100">
            <p className=" text-green-600 text-[10px] whitespace-nowrap">+1.34% ↗</p>
          </div>
        </div>
        <CardDescription className=" text-sm text-green-600 font-bold whitespace-nowrap">
          On track
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              className=" text-xs text-gray-300"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#EE774A"
              fillOpacity={0}
              stroke="#EE774A"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
