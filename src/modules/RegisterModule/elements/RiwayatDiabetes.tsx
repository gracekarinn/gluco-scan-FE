import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { riwayatDiabetesSchema, submitRiwayatDiabetesData } from "../constant";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { riwayatDiabetes } from "../constant";

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
        className="flex flex-col items-center my-8"
      >
        {" "}
        <div className="relative w-full h-[12px]">
          <Image
            alt="1"
            src={"/stepper/5.png"}
            fill
            sizes="none"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-[24px] text-center font-bold">
            Apakah Anda memiliki riwayat diabetes?
          </h1>
        </div>
        <div className="flex flex-col gap-y-5 mt-8 w-[271px]">
          <Button
            onClick={() =>
              form.setValue("riwayat_diabetes", riwayatDiabetes.YES)
            }
            variant="ghost"
            className="w-full"
          >
            Ya
          </Button>
          <Button
            onClick={() =>
              form.setValue("riwayat_diabetes", riwayatDiabetes.NO)
            }
            variant="ghost"
            className="w-full"
          >
            Tidak
          </Button>
        </div>
        <Button
          type="submit"
          className="mt-8 w-[271px]"
          variant="primary"
          disabled={!form.formState.isValid}
        >
          Continue
        </Button>
      </form>
    </Form>
  );
};
