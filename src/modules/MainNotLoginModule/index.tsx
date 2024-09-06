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
  return (
    <div className="flex flex-col gap-y-20">
      <MulaiSekarang />
      <CheckThisOut />
      <FiturKami />
      <PaketLangganan />
    </div>
  );
};

export default MainNotLoginModule;
