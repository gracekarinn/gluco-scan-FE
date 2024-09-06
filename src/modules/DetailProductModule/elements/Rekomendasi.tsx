import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export const Rekomendasi = ({isPro} : {isPro: boolean | undefined}) => {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-scroll no-scrollbar",
        !isPro && "blur-sm"
      )}
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <div className="flex flex-col gap-1 w-[120px]" key={index}>
          <div className="bg-white p-2 rounded-[4px] drop-shadow-lg">
            <div className="relative w-[90px] h-[90px]">
              <Image
                alt={"air"}
                src={"/air.png"}
                fill
                sizes="none"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-M4 text-[#101623] font-medium text-center">
            Nestle Pure Life (600ml)
          </p>
          <p className="text-M4 text-neutral-300 text-center">Gula : 0g</p>
        </div>
      ))}
    </div>
  );
};
