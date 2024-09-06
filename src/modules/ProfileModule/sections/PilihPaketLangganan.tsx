import React from "react";
import { ChevronLeft } from "lucide-react";
import { PaketLangganan } from "../elements/PaketLangganan";
import Link from "next/link";

export const PilihPaketLangganan = ({
  onClick,
  onNext,
}: {
  onClick: () => void;
  onNext: () => void;
}) => {
  return (
    <section>
      <Link href="/profile">
        <ChevronLeft
          size={24}
          onClick={onClick}
          className="text-neutral-900  absolute translate-y-1"
        />
      </Link>
      <PaketLangganan onNext={onNext} />
    </section>
  );
};
