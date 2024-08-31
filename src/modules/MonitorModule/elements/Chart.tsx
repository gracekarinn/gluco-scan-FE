"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Sunday", sugar: 186 },
  { day: "Monday", sugar: 305 },
  { day: "Tuesday", sugar: 237 },
  { day: "Wednesday", sugar: 73 },
  { day: "Thursday", sugar: 209 },
  { day: "Friday", sugar: 214 },
  { day: "Saturday", sugar: 214 },
];

const chartConfig = {
  sugar: {
    label: "Sugar",
    color: "#FF7900",
  },
} satisfies ChartConfig;

export const Chart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full px-4 py-2"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 2)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="sugar" fill="var(--color-sugar)" radius={2} />
      </BarChart>
    </ChartContainer>
  );
};
