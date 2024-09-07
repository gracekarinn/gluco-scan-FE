"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect } from "react";
import { getCookies } from "cookies-next";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [gula, setGula] = useState([
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
    { date: "", sugar: 0 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const gulaArr = await fetch("https://gluco-scan-be-production.up.railway.app/product/gula", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookies().accessToken}`,
        },
      });
      const gulaJson = await gulaArr.json();
      const sevenDaysBefore = Array(7)
        .fill(0)
        .map((_, index) => {
          const date = new Date();
          date.setDate(date.getDate() - index);
          const day = date.getDay() + 1;
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        })
        .reverse();
      const dataObjArr = [
        { date: sevenDaysBefore[0], sugar: gulaJson[0] },
        { date: sevenDaysBefore[1], sugar: gulaJson[1] },
        { date: sevenDaysBefore[2], sugar: gulaJson[2] },
        { date: sevenDaysBefore[3], sugar: gulaJson[3] },
        { date: sevenDaysBefore[4], sugar: gulaJson[4] },
        { date: sevenDaysBefore[5], sugar: gulaJson[5] },
        { date: sevenDaysBefore[6], sugar: gulaJson[6] },
      ];
      setGula(dataObjArr);
    };
    fetchData();
  }, []);

  if (gula[0].date === "") {
    return <Skeleton className="min-h-[300px] w-full" />;
  }

  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full px-4 py-2"
    >
      <BarChart accessibilityLayer data={gula}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="sugar" fill="var(--color-sugar)" radius={2} />
      </BarChart>
    </ChartContainer>
  );
};
