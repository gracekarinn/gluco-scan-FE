"use client";
import React, { useState, useEffect } from "react";
import MulaiSekarang from "./sections/MulaiSekarang";
import CheckThisOut from "./sections/CheckThisOut";
import FiturKami from "./sections/FiturKami";
import { PaketLangganan } from "./sections/PaketLangganan";
import { Scanner as ScannerComp } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button";
import { ProductDetailProps } from "../DetailProductModule/interface";

const MainNotLoginModule = () => {
  const [data, setData] = useState<ProductDetailProps>();

  const onScan = async (codes: string) => {
    const data = await fetch(
      " https://world.openfoodfacts.org/api/v2/product/" + codes + ".json",
      {
        method: "GET",
      }
    );

    const response = await data.json();
    console.log(response);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://world.openfoodfacts.org/api/v2/product/737628064502.json",
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
        takaran: "string",
        energyKcal: response.product.nutriments.energy_value,
        proteins: response.product.nutriments.proteins,
        fats: response.product.nutriments.fat,
        carbohydrates: response.product.nutriments.carbohydrates,
      });
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-y-20">
      <Button onClick={() => onScan("737628064502")}>Click Me</Button>
      <MulaiSekarang />
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
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
        }}
        allowMultiple={true}
        scanDelay={2000}
      />
      {JSON.stringify(data)}
      <CheckThisOut />
      <FiturKami />
      <PaketLangganan />
    </div>
  );
};

export default MainNotLoginModule;
