"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, ScanBarcode } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "../elements/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCardProps } from "../interface";
import { getCookies } from "cookies-next";

export const Products = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState<ProductCardProps[] | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/product", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookies().accessToken}`,
        },
      });

      const dataJson = await data.json();
      setProduct(dataJson);
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row my-4 w-full gap-2 md:justify-center">
        <Input
          icon={<Search />}
          placeholder="Cari Produk"
          className="min-[380px]:w-[300px] md:w-[500px]"
          onChange={handleSearch}
        />
        <Link
          href="/produk/scan"
          className="text-orange-400 p-2 border border-orange-400 bg-orange-50 aspect-square rounded-[12px] hover:shadow-md"
        >
          <ScanBarcode size={24} className="cursor-pointer" />
        </Link>
      </div>
      <h1 className="text-M3 font-medium mb-2 text-[#101623]">Recent Search</h1>
      {product === null ? (
        <Skeleton className="min-h-[500px] w-full" />
      ) : (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-2 gap-y-3">
          {search === ""
            ? product.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            : product
                .filter((product) =>
                  product.namaProduct
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
        </div>
      )}
    </section>
  );
};
