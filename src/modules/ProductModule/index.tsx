import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Products } from "./sections/Products";

export const ProductModdule = () => {
  return (
    <main className="w-full my-4">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/main">
          <ChevronLeft size={24} className="cursor-pointer" />
        </Link>
        <h1 className="text-M2 font-medium text-[#101623]">Scan Product</h1>
      </div>
      <Products />
    </main>
  );
};
