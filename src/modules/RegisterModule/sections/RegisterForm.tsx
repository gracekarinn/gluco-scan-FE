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

export const RegisterForm = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState({});

  const route = useRouter();

  const onSubmitRegister = async (data: submitRegisterData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onSubmitTanggalLahir = async (data: submitTanggalLahirData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onSubmitJenisKelamin = async (data: submitJenisKelaminData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onSubmitBeratBadan = async (data: submitBeratBadanData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onSubmitTinggiBadan = async (data: submitTinggiBadanData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onSubmitRiwayatLain = async (data: submitRiwayatPenyakitData) => {
    console.log(data);
    setData(data);
    setPage(page + 1);
  };

  const onBack = () => {
    page > 0 ? setPage(page - 1) : route.back;
  };

  return (
    <section>
      <AuthNavbar onBack={onBack} />
      {page === 0 && <RiwayatLain onSubmit={onSubmitRiwayatLain} />}
      {page === 1 && <div>{JSON.stringify(data)}</div>}
      {page === 2 && <JenisKelamin onSubmit={onSubmitJenisKelamin} />}
      {page === 3 && <div>{JSON.stringify(data)}</div>}
    </section>
  );
};
