import React from "react";
import { SubsCard } from "../elements/SubsCard";

export const PaketLangganan = () => {
  return (
    <section>
      <div className="flex flex-col gap-3 text-center my-5">
        <h1 className="text-M2 font-medium">Pilih Paket Langganan Anda</h1>
        <p className="text-P4 italic">
          GlucoScan Pro, bantu Anda menjaga kesehatan dengan lebih optimal.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <SubsCard />
        <SubsCard />
      </div>
    </section>
  );
};
