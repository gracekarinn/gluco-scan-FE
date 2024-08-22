import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Toaster } from "../ui/sonner";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Toaster position="top-center" />
      <main className="min-h-screen w-[375px] lg:w-[750px] bg-white-50 px-4">
        {children}
      </main>
      <Footer />
    </main>
  );
};
