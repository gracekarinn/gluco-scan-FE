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
import { JenisKelamin } from "../elements/JenisKelamin";

export const RegisterForm = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState({});

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

  return (
    <section>
      {page === 0 && <TanggalLahir onSubmit={onSubmitTanggalLahir} />}
      {page === 1 && <div>{JSON.stringify(data)}</div>}
      {page === 2 && <JenisKelamin onSubmit={onSubmitJenisKelamin} />}
      {page === 3 && <div>{JSON.stringify(data)}</div>}
    </section>
  );
};
