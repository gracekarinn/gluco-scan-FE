import { cn } from "@/lib/utils";
import React from "react";

export const Takaran = ({isPro} : {isPro: boolean | undefined}) => {
  return (
    <div
      className={cn(
        "max-[360px]:grid-cols-2 grid-cols-3 grid gap-2 lg:mx-24 mb-7",
        !isPro && "blur-sm"
      )}
    >
      <div className="border border-neutral-200 rounded-[4px]">
        <p className="text-P4 text-[#101623] font-medium text-center py-1 rounded-t-[4px] bg-[#C4F7D8]">
          Aman
        </p>
        <hr className="border-neutral-200" />
        <p className="text-M3 text-[#101623] font-medium text-center p-2">
          {"< 1 Porsi"}
        </p>
      </div>
      <div className="border border-neutral-200 rounded-[4px]">
        <p className="text-P4 text-[#101623] font-medium text-center py-1 rounded-t-[4px] bg-[#F8F48A]">
          Berisiko
        </p>
        <hr className="border-neutral-200" />
        <p className="text-M3 text-[#101623] font-medium text-center p-2">
          {"1.5 Porsi"}
        </p>
      </div>
      <div className="border max-[360px]:col-span-2 border-neutral-200 rounded-[4px]">
        <p className="text-P4 text-[#101623] font-medium text-center py-1 rounded-t-[4px] bg-[#F88A8A]">
          Berbahaya
        </p>
        <hr className="border-neutral-200" />
        <p className="text-M3 text-[#101623] font-medium text-center p-2">
          {"> 1.5 Porsi"}
        </p>
      </div>
    </div>
  );
};
