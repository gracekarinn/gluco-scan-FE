"use client";
import React, { useState } from "react";
import {
  submitRegisterData,
  submitTanggalLahirData,
  submitJenisKelaminData,
  submitBeratBadanData,
  submitTinggiBadanData,
  submitRiwayatDiabetesData,
  submitRiwayatPenyakitData,
} from "../constant";
import { EmailPass } from "../elements/EmailPass";
import { TanggalLahir } from "../elements/TanggalLahir";
import { BeratBadan } from "../elements/BeratBadan";
import { TinggiBadan } from "../elements/TinggiBadan";
import { RiwayatLain } from "../elements/RiwayatLain";
import { AuthNavbar } from "../elements/AuthNavbar";
import { useRouter } from "next/navigation";
import { JenisKelamin } from "../elements/JenisKelamin";
import { RiwayatDiabetes } from "../elements/RiwayatDiabetes";
import { toast } from "sonner";

export const RegisterForm = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState({});

  const route = useRouter();

  const onSubmitRegister = async (data: submitRegisterData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitTanggalLahir = async (data: submitTanggalLahirData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitJenisKelamin = async (data: submitJenisKelaminData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitBeratBadan = async (data: submitBeratBadanData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitTinggiBadan = async (data: submitTinggiBadanData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitRiwayatDiabetes = async (data: submitRiwayatDiabetesData) => {
    setData((prev) => ({ ...prev, ...data }));
    setPage((prev) => prev + 1);
  };

  const onSubmitRiwayatLain = async (formData: submitRiwayatPenyakitData) => {
    setData((prev) => ({ ...prev, ...formData }));
    setPage((prev) => prev + 1);

    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.json());
        //route.push("/login");
        toast.success("Register Berhasil");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Register Gagal");
      });
  };

  const onBack = () => {
    page > 0 ? setPage(page - 1) : route.push("/welcome");
  };

  return (
    <section>
      <AuthNavbar onBack={onBack} />
      {page === 0 && <EmailPass onSubmit={onSubmitRegister} />}
      {page === 1 && <TanggalLahir onSubmit={onSubmitTanggalLahir} />}
      {page === 2 && <JenisKelamin onSubmit={onSubmitJenisKelamin} />}
      {page === 3 && <BeratBadan onSubmit={onSubmitBeratBadan} />}
      {page === 4 && <TinggiBadan onSubmit={onSubmitTinggiBadan} />}
      {page === 5 && <RiwayatDiabetes onSubmit={onSubmitRiwayatDiabetes} />}
      {page === 6 && <RiwayatLain onSubmit={onSubmitRiwayatLain} />}
    </section>
  );
};
