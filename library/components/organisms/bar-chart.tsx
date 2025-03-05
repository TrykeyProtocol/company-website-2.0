"use client";

import React, { useState } from "react";
import { Bar, BarChart, XAxis, ResponsiveContainer, LabelList } from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../atoms/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../atoms/chart";

// Weekly yield data
const weeklyYieldData = [
  { day: "Nov 1", amount: 5000 },
  { day: "Nov 2", amount: 15000 },
  { day: "Nov 3", amount: 25000 },
  { day: "Nov 5", amount: 3000 },
  { day: "Nov 6", amount: 25000 },
  { day: "Nov 7", amount: 5000 },
];

// Chart config
const chartConfig = {
  amount: {
    label: "Amount",
    color: "#EA5016",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  const [timeRange, setTimeRange] = useState("Weekly");

  return (
    <Card className="rounded-lg overflow-hidden">
      <CardHeader className="pb-0 pt-6 px-6">
        <div className="flex justify-between items-center">
          <h3 className=" font-bold text-neutral-800">Generated Yield</h3>
          <Select defaultValue="Weekly" onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 shadow-none bg-transparent font-medium text-neutral-600">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <SelectItem value="Daily">Daily</SelectItem>
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-4 px-6 pb-6">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-400 hover:text-gray-600 transition p-1">
            <ChevronLeft size={24} />
          </button>
          <p className="text-neutral-600 font-medium">Nov 1 - Nov 7</p>
          <button className="text-gray-400 hover:text-gray-600 transition p-1">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="h-64 w-full">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={weeklyYieldData}
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              // barSize={40}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#373737", fontWeight: 600, fontSize: 12 }}
                tickMargin={10}
              />
              <Bar dataKey="amount" fill="#EA5016" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground text-lightMode-brand-primary"
                  fontSize={12}
                  fill="#EA5016"
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>

      </CardContent>
    </Card>
  );
}
