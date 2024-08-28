import React from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export const AuthNavbar = ({ onBack }: { onBack: () => void }) => {
  return (
    <nav className="bg-white h-[60px] py-2 px-4 shadow-sm flex items-center">
      <ChevronLeft onClick={onBack} width={24} height={24} className="text-orange-500 cursor-pointer" />
      <div className="relative w-full h-full">
        <Image
          alt="1"
          src={"/GlucoScanLogo.png"}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </nav>
  );
};
