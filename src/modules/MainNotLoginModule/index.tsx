"use client";
import React, { useState } from "react";
import MulaiSekarang from "./sections/MulaiSekarang";
import CheckThisOut from "./sections/CheckThisOut";
import FiturKami from "./sections/FiturKami";
import { PaketLangganan } from "./sections/PaketLangganan";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Scanner } from "@yudiel/react-qr-scanner";

const MainNotLoginModule = () => {
  const [data, setData] = useState<any>("Not Found");

  return (
    <div className="flex flex-col gap-y-20">
      <MulaiSekarang />
      <Scanner
        onScan={(result) => {
          console.log(result);
          setData(result);
        }}
      />
      <p>{data}</p>
      <CheckThisOut />
      <FiturKami />
      <PaketLangganan />
    </div>
  );
};

export default MainNotLoginModule;
