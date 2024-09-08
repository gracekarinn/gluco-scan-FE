"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DetailProduct } from "./sections/DetailProduct";
import { Skeleton } from "@/components/ui/skeleton";

export const DetailProductModule = ({ id }: { id: string }) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://world.openfoodfacts.org/api/v2/product/" + id + ".json",
        {
          method: "GET",
        }
      );

      const response = await data.json();
      setData({
        productId: response.code,
        namaProduk: response.product.product_name,
        kadarGula: response.product.nutriments.sugars,
        image: response.product.image_url,
        takaran:
          response.product.product_quantity +
          " " +
          (response.product.product_quantity_unit === undefined
            ? "g"
            : response.product.product_quantity_unit),
        energyKcal: response.product.nutriments.energy_value,
        proteins: response.product.nutriments.proteins,
        fats: response.product.nutriments.fat,
        carbohydrates: response.product.nutriments.carbohydrates,
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Skeleton className="min-h-screen w-full" />;
  }

  return (
    <main>
      <div className="flex items-center justify-start gap-4 my-4">
        <Link href="/produk/scan">
          <ChevronLeft size={24} className="cursor-pointer" />
        </Link>
        <h1 className="text-M2 font-medium lg:ml-[250px] ml-[67px] text-[#101623]">
          Scan Product
        </h1>
      </div>
      <DetailProduct {...data} />
    </main>
  );
};
