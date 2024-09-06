"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Scanner as ScannerComp } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import useUserData from "@/components/hooks/userData";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ScanProduk = () => {
  const router = useRouter();
  const { isLoading } = useUserData();

  const [input, setInput] = useState<string>("");

  const onScan = async (codes: string) => {
    router.push(`/produk/scan/${codes}`);
  };

  if (isLoading) {
    return <Skeleton className="min-h-screen w-[300px] lg:w-[700px] my-12" />;
  }
  return (
    <section className="mt-4">
      <Link href="/main" className="mb-4">
        <div className="flex">
          <ChevronLeft size={24} />
          <p className="text-center text-M3 font-medium mx-auto">Scan Produk</p>
        </div>
      </Link>
      <div className="mt-4">
        <ScannerComp
          formats={[
            "qr_code",
            "micro_qr_code",
            "rm_qr_code",
            "maxi_code",
            "pdf417",
            "aztec",
            "data_matrix",
            "matrix_codes",
            "dx_film_edge",
            "databar",
            "databar_expanded",
            "codabar",
            "code_39",
            "code_93",
            "code_128",
            "ean_8",
            "ean_13",
            "itf",
            "linear_codes",
            "upc_a",
            "upc_e",
          ]}
          onScan={(detectedCodes) => {
            console.log("onScan:", JSON.stringify(detectedCodes, null, 2));
            if (detectedCodes && detectedCodes.length > 0) {
              const code = detectedCodes[0].rawValue;
              onScan(code);
            }
          }}
          onError={(error) => {
            console.log(`onError: ${error}'`);
          }}
          components={{
            audio: true,
            torch: true,
            zoom: true,
            finder: true,
          }}
          allowMultiple={true}
          scanDelay={2000}
        />
      </div>
      <Button variant="ghost" className="p-4 mt-4 w-full justify-center">
        Use AI
      </Button>
      <div className="flex gap-2 mt-4">
        <Button className="w-full">
          <Image src="/images-fill.png" alt="image" width={24} height={24} />
        </Button>
        <Button variant="ghost" className="w-full">
          <Image
            src="/lighting-cherge-fill.png"
            alt="image"
            width={24}
            height={24}
          />
        </Button>
      </div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-y-4">
        <p>Kode Barcode</p>
        <Input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex : 5053990106981"
        />
        <Button onClick={() => onScan(input)} className="w-full mb-10">
          Submit
        </Button>
      </div>
    </section>
  );
};

export default ScanProduk;
