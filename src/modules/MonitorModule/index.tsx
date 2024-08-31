"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { AsupanGula } from "./sections/AsupanGula";
import { Button } from "@/components/ui/button";

export const MonitorModule = () => {
  const router = useRouter();
  return (
    <main className="my-4 relative">
      <div className="flex items-center gap-4 text-[#101623]">
        <ChevronLeft
          onClick={() => router.back()}
          size={24}
          className="cursor-pointer"
        />
        <h1 className="text-M2 font-medium">Monitor Asupan Gula</h1>
      </div>
      <AsupanGula />
    </main>
  );
};
