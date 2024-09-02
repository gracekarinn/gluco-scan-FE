"use client";
import useUserData from "@/components/hooks/userData";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu, LayoutPanelLeft, LogOut } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getCookies, deleteCookie } from "cookies-next";
import { toast } from "sonner";

export const Navbar = () => {
  const { userData, isLoading } = useUserData();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const onLogOut = async () => {
    console.log("logout");
    await fetch("/api/auth/logout", {
      headers: {
        Authorization: `Bearer ${getCookies().accessToken}`,
      },
    }).then(() => {
      setOpenDialog(false);
      setOpen(false);
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      toast.success("Berhasil logout");
      router.push("/welcome");
      window.location.reload();
    });
  };

  const noNavbar = ["/welcome", "/login", "/register"];

  if (noNavbar.includes(pathname)) return null;

  return (
    <nav className="w-full flex justify-between items-center bg-white px-6 py-3">
      <div className="rounded-md size-[32px] lg:size-[64px] relative">
        <Image
          src="/GlucoScanLogo.png"
          alt="GlucoScanLogo"
          className="object-contain"
          fill
        />
      </div>
      <Drawer direction="right" onOpenChange={setOpen} open={open}>
        <DrawerTrigger>
          <Menu className="text-orange-500 lg:size-[48px] size-[24px]" />
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay className="fixed inset-0 bg-black/40" />
          <DrawerContent className="bg-white flex flex-col px-6 rounded-none border-0 h-full w-full mt-24 fixed bottom-0 right-0">
            <div className="flex justify-between pt-3 pb-9">
              <div className="rounded-md size-[32px] lg:size-[64px] relative">
                <Image
                  src="/GlucoScanLogo.png"
                  alt="GlucoScanLogo"
                  className="object-contain"
                  fill
                />
              </div>
              <Menu
                onClick={() => setOpen(false)}
                className="text-orange-500 lg:size-[48px] size-[24px] cursor-pointer"
              />
            </div>

            {userData === null ? (
              <div className="flex flex-col gap-6">
                <p
                  className={cn(
                    "font-medium text-M3 cursor-pointer",
                    pathname === "/" ? "text-orange-500" : "text-white-700"
                  )}
                  onClick={() => {
                    router.push("/");
                    setOpen(false);
                  }}
                >
                  Home
                </p>
                <Button
                  className="w-[111px]"
                  onClick={() => {
                    router.push("/welcome");
                    setOpen(false);
                  }}
                >
                  Sign in
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <p
                  className={cn(
                    "font-medium text-M3 cursor-pointer",
                    pathname === "/main" ? "text-orange-500" : "text-white-700"
                  )}
                  onClick={() => {
                    router.push("/main");
                    setOpen(false);
                  }}
                >
                  Home
                </p>
                <p
                  className={cn(
                    "font-medium text-M3 cursor-pointer",
                    pathname === "/" ? "text-orange-500" : "text-white-700"
                  )}
                  onClick={() => {
                    router.push("/");
                    setOpen(false);
                  }}
                >
                  Tentang Kami
                </p>
                <p
                  className={cn(
                    "font-medium text-M3 cursor-pointer",
                    pathname === "/konsultasi"
                      ? "text-orange-500"
                      : "text-white-700"
                  )}
                  onClick={() => {
                    router.push("/konsultasi");
                    setOpen(false);
                  }}
                >
                  Telekonsultasi
                </p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="border-0 pt-0 hover:no-underline data-[state=open]:text-orange-500 text-white-700 transition-all">
                      Welcome, {userData.fullName}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 flex flex-col gap-4">
                      <div
                        className={cn(
                          "flex gap-2 text-gray-400 text-M3 font-medium items-center cursor-pointer",
                          pathname === "/profile"
                            ? "text-orange-500"
                            : "text-gray-400"
                        )}
                        onClick={() => {
                          router.push("/profile");
                          setOpen(false);
                        }}
                      >
                        <LayoutPanelLeft size={16} /> Profile
                      </div>
                      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                        <DialogTrigger asChild>
                          <div className="flex gap-2 text-red-600 text-M3 font-medium cursor-pointer items-center">
                            <LogOut size={16} /> Sign out
                          </div>
                        </DialogTrigger>
                        <DialogContent
                          className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
                          hideClose
                        >
                          <div className="mx-auto size-[80px] relative">
                            <Image
                              src="/exclamation-triangle-fill.png"
                              alt="food"
                              className="object-contain"
                              fill
                            />
                          </div>
                          <h2 className="text-H4 font-bold text-center text-grey-900 whitespace-nowrap">
                            Masukkan batasan harian
                          </h2>
                          <p className="text-P5 text-[#737373] text-center">
                            Anda harus mendaftar ulang jika melanjutkan
                          </p>
                          <div className="grid grid-cols-2 gap-1 mt-4">
                            <Button
                              variant={"secondary"}
                              onClick={() => setOpenDialog(false)}
                            >
                              Kembali
                            </Button>
                            <Button
                              onClick={() => onLogOut()}
                              className="w-full"
                            >
                              Ya, keluar
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </nav>
  );
};
