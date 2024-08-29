import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { riwayatDiabetesSchema, submitRiwayatDiabetesData } from "../constant";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Droplet, MinusCircle } from "lucide-react";

export const RiwayatDiabetes = ({
  onSubmit,
}: {
  onSubmit: (data: submitRiwayatDiabetesData) => void;
}) => {
  const form = useForm<submitRiwayatDiabetesData>({
    resolver: zodResolver(riwayatDiabetesSchema),
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-[85vh] my-8"
      >
        <div className="gap-8 flex flex-col items-center">
          <div className="relative w-full h-[12px]">
            <Image
              alt="1"
              src={"/stepper/5.png"}
              fill
              sizes="none"
              className="object-contain"
            />
          </div>
          <div className="mx-9">
            <h1 className="text-center font-bold text-grey-900 text-H3">
              Apakah Anda memiliki riwayat diabetes?
            </h1>
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="riwayatDiabetes"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col w-full gap-4">
                        <Button
                          onClick={() =>
                            field.onChange({ target: { value: true } })
                          }
                          variant="tertiary"
                          className="justify-start text-P4 h-[56px] px-6 py-4 rounded-[20px] border-0 shadow-xl text-black"
                        >
                          <Droplet
                            width={24}
                            height={24}
                            className="mr-6 text-orange-500"
                          />
                          Ya
                        </Button>
                        <Button
                          onClick={() =>
                            field.onChange({ target: { value: false } })
                          }
                          variant="tertiary"
                          className="justify-start text-P4 h-[56px] px-6 py-4 rounded-[20px] border-0 shadow-xl text-black"
                        >
                          <MinusCircle
                            width={24}
                            height={24}
                            className="mr-6 text-orange-500"
                          />
                          Tidak
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        </div>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </form>
    </Form>
  );
};
