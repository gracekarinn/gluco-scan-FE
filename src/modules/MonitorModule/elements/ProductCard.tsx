import React from "react";
import Image from "next/image";
import { ProductCardProps } from "../interface";

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  gula,
  weight,
}) => {
  return (
    <div className="p-2 pr-5 flex justify-between items-center rounded-[16px] border border-orange-100">
      <div className="flex gap-4">
        <div className="aspect-square bg-white rounded-md size-[60px] shadow-lg relative">
          <Image src={image} alt="food" className="object-contain" fill />
        </div>
        <div>
          <h1 className="text-H5 font-bold text-[#101623]">{name}</h1>
          <p className="text-M4 text-[#ADADAD] font-medium">{weight}</p>
        </div>
      </div>
      <div className="size-[35px] bg-orange-500 p-2 rounded-full flex items-center text-white-100 font-bold text-H5">
        {gula}
      </div>
    </div>
  );
};
