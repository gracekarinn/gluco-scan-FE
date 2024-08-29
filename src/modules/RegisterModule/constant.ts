import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
  fullName: z.string(),
});

export const tanggalLahirSchema = z.object({
  tanggalLahir: z.date(),
});

export const jenisKelaminSchema = z.object({
  gender: z.string(),
});

export const beratBadanSchema = z.object({
  weight: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
});

export const tinggiBadanSchema = z.object({
  height: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
});

export const riwayatDiabetesSchema = z.object({
  riwayatDiabetes: z.boolean(),
});

export const riwayatPenyakitSchema = z.object({
  riwayatPenyakit: z.string().optional(),
});

export type submitRegisterData = z.infer<typeof registerSchema>;
export type submitTanggalLahirData = z.infer<typeof tanggalLahirSchema>;
export type submitJenisKelaminData = z.infer<typeof jenisKelaminSchema>;
export type submitBeratBadanData = z.infer<typeof beratBadanSchema>;
export type submitTinggiBadanData = z.infer<typeof tinggiBadanSchema>;
export type submitRiwayatDiabetesData = z.infer<typeof riwayatDiabetesSchema>;
export type submitRiwayatPenyakitData = z.infer<typeof riwayatPenyakitSchema>;
