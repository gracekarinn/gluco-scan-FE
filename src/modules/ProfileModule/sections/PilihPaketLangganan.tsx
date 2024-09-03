import React from "react";
import { ChevronLeft } from "lucide-react";
import { PaketLangganan } from "../elements/PaketLangganan";

export const PilihPaketLangganan = ({
  onClick,
  onNext,
}: {
  onClick: () => void;
  onNext: () => void;
}) => {
  return (
    <section>
      <ChevronLeft
        size={24}
        onClick={onClick}
        className="text-neutral-900  absolute translate-y-1"
      />
      <PaketLangganan onNext={onNext} />
    </section>
  );
};
