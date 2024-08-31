"use client";
import React, { useState } from "react";
import { Chart } from "../elements/Chart";
import { ProductCard } from "../elements/ProductCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "@/components/ui/inputform";
import { Form } from "@/components/ui/form";

const gulaDarahSchema = z.object({
  maxGula: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
});

export type submitGulaDarahData = z.infer<typeof gulaDarahSchema>;

export const AsupanGula = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<submitGulaDarahData>({
    resolver: zodResolver(gulaDarahSchema),
  });

  const onSubmit = (data: submitGulaDarahData) => {
    console.log(data);
  };

  return (
    <section
      className={cn(
        "mt-3 h-[100vh] flex flex-col justify-between",
        open && "blur-sm"
      )}
    >
      <div>
        <h1 className="text-H5 font-bold text-[#051532]">Last 7 days</h1>
        <p className="font-medium text-P6 text-neutral-200 xl:hidden">
          *Tap to see the values
        </p>
        <p className="font-medium text-P6 text-neutral-200 max-xl:hidden">
          *Hover to see the values
        </p>
        <Chart />
        <h1 className="text-H5 font-bold text-[#051532] mb-3">Today</h1>
        <div className="flex flex-col max-lg:max-h-[580px] lg:max-h-[400px] gap-3 overflow-y-scroll">
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
          <ProductCard
            name="Coca cola"
            image="/darah-keren.png"
            gula={30}
            weight="300ml"
          />
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="w-full hover:scale-105 my-10 transition-all duration-300"
            variant={"secondary"}
          >
            Set Batasan
          </Button>
        </DialogTrigger>
        <DialogContent
          className="border border-[#EEF0F2] rounded-[8px] p-6 bg-[#f7f7f7] w-[300px] flex flex-col gap-2"
          hideClose
        >
          <div className="mx-auto size-[80px] relative">
            <Image
              src="/droplet-fill.png"
              alt="food"
              className="object-contain"
              fill
            />
          </div>
          <h2 className="text-H4 font-bold text-grey-900 whitespace-nowrap">
            Masukkan batasan harian
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <InputForm
                label="Batasan Asupan Gula (gr)"
                placeholder="80"
                name="maxGula"
                form={form}
              />
              <div className="grid grid-cols-2 gap-1">
                <Button variant={"secondary"} onClick={() => setOpen(false)}>Kembali</Button>
                <Button type="submit" className="w-full">
                  Tetapkan
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
