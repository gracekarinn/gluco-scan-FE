"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { riwayatPenyakitSchema, submitRiwayatPenyakitData } from "../constant";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

export const RiwayatLain = ({
  onSubmit,
}: {
  onSubmit: (data: submitRiwayatPenyakitData) => void;
}) => {
  const form = useForm<submitRiwayatPenyakitData>({
    resolver: zodResolver(riwayatPenyakitSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-[85vh] my-8"
      >
        <div className="gap-8 flex flex-col">
          <div className="relative w-full h-[12px]">
            <Image
              alt="1"
              src={"/stepper/6.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="mx-9">
            <h1 className="text-center font-bold text-grey-900 text-H3">
              Tulis Riwayat Lainnya
            </h1>
          </div>
          <FormField
            control={form.control}
            name="riwayatPenyakit"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tuliskan Riwayat yang Anda miliki........"
                      className="resize-none w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
};
