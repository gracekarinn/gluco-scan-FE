"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DetailProduct } from "./sections/DetailProduct";
import { Skeleton } from "@/components/ui/skeleton";
import { Frown } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const DetailProductModule = ({ id }: { id: string }) => {
  const [data, setData] = useState<any>();
  const [dialog, setDialog] = useState(false);
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
      try {
        if (response.product.nutriments.sugars === undefined) {
          setDialog(true);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        setDialog(true);
        setIsLoading(false);
        return;
      }
      setData({
        productId: response.code,
        namaProduk: response.product.product_name,
        kadarGula: response.product.nutriments.sugars_serving,
        image: response.product.image_url,
        servingSize:
          response.product.serving_quantity +
          " " +
          (response.product.serving_quantity_unit === undefined
            ? "g"
            : response.product.serving_quantity_unit === "g"
            ? "gram"
            : response.product.serving_quantity_unit),
        takaran:
          response.product.product_quantity +
          " " +
          (response.product.product_quantity_unit === undefined
            ? "g"
            : response.product.product_quantity_unit === "g"
            ? "gram"
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
      <Dialog open={dialog}>
        <DialogContent
          className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
          hideClose
        >
          <Frown className="mx-auto size-[80px] text-orange-500" />
          <h2 className="text-H4 font-bold text-center text-grey-900 whitespace-nowrap">
            Data Tidak Ditemukan
          </h2>
          <p className="text-P5 text-[#737373] text-center">
            Data produk tidak ditemukan, silahkan coba produk lain
          </p>
          <div className="mt-4">
            <Link href={"/produk/scan"}>
              <Button className="w-full">Kembali</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      {!dialog && !isLoading && (
        <>
          <DetailProduct {...data} />
        </>
      )}
    </main>
  );
};
