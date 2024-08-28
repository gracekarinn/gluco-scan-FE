import React from "react";
import { Unlock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SubsCard = () => {
  return (
    <div className="w-full h-full px-4 py-3 flex flex-col shadow-xl bg-white rounded-[20px] relative">
      <div className="absolute right-4 text-[#e6f2fa] font-medium text-P6 bg-orange-500 py-1 px-2 rounded-[20px]">
        1 bulan
      </div>
      <div className="text-orange-500 mx-auto w-10 h-10 mb-2 border-4 border-[#FFF2E6] rounded-full bg-orange-100 flex items-center justify-center">
        <Unlock width={20} height={20} />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-h5 font-semibold text-center text-black">
          GlucoScan Pro Monthly Subscription
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <h2>Akses Penuh</h2>
            <div className="flex flex-col gap-1">
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Akses Penuh</h2>
            <div className="flex flex-col gap-1">
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
              <p className="text-P6 font-medium flex items-center gap-2 justify-start">
                <Check height={12.5} width={12.5} className="text-orange-500" />{" "}
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-H5 font-medium">
          <h3>Harga</h3>
          <h3>Rp60.000</h3>
        </div>
        <Button>Langganan Sekarang</Button>
      </div>
    </div>
  );
};
