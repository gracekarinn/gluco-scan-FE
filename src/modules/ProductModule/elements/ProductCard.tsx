import React from "react";
import Image from "next/image";
import { ProductCardProps } from "../interface";
import Link from "next/link";

export const ProductCard: React.FC<ProductCardProps> = ({
  namaProduk,
  image,
  takaran,
  productId,
}) => {
  return (
    <Link
      href={`/produk/scan/${productId}`}
      className="flex flex-col justify-between items-center gap-[10px] cursor-pointer"
    >
      <div className="p-5 bg-white-100 rounded-[20px]">
        <div className="relative max-[340px]:w-[90px] w-[128px] max-[340px]:h-[90px] h-[128px]">
          <Image
            alt={namaProduk}
            src={image}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
      </div>
      <h1 className="font-medium text-center text-M4 text-[#101623]">
        {namaProduk}
        <br />
        {`(${takaran})`}
      </h1>
    </Link>
  );
};
