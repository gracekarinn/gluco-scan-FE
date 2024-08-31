import React from "react";
import { MENU_ITEMS } from "../constant";
import Link from "next/link";

const FiturKami = () => {
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center mb-[300px]">
      <h1 className="font-semibold text-2xl">Fitur Kami</h1>
      <div className="flex flex-col gap-y-3 w-full h-[149px]">
        {MENU_ITEMS.map((item, index) => (
          <Link key={index} href={item.url}>
            <div
              key={index}
              className="flex flex-col items-center gap-y-2 p-4 bg-orange-50 rounded-2xl"
            >
              <item.icon className="w-12 h-12 text-orange-500" />
              <span className="font-semibold ">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FiturKami;
