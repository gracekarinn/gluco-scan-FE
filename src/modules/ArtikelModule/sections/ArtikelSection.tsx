import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import IsiArtikel from "../components/IsiArtikel";
import Link from "next/link";

const ArtikelSection = () => {
  return (
    <section className="pb-4">
      <div className="flex mx-4 mt-3 gap-4  items-center">
        <Link
          href="/main"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
        <h3 className="text-lg">Artikel Kesehatan</h3>
      </div>
      <IsiArtikel />
    </section>
  );
};

export default ArtikelSection;
