import React from "react";
import { Navbar } from "./Navbar";
import { Toaster } from "../ui/sonner";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white-50">
      <Toaster position="top-center" />
      <Navbar />
      <main className="min-h-screen min-[320px]:w-[300px] min-[390px]:w-[375px] lg:w-[750px] px-4">
        {children}
      </main>
    </main>
  );
};
