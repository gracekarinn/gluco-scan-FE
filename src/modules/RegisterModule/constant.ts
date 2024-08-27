import { z } from "zod";

export enum riwayatDiabetes {
  YES,
  NO,
}

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
  full_name: z.string(),
});

export const tanggalLahirSchema = z.object({
  tanggal_lahir: z.date(),
})

export const jenisKelaminSchema = z.object({
  jenis_kelamin: z.string(),
})

export const beratBadanSchema = z.object({
  berat_badan: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
})

export const tinggiBadanSchema = z.object({
  tinggi_badan: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
})

export const riwayatDiabetesSchema = z.object({
  riwayat_diabetes: z.nativeEnum(riwayatDiabetes),
})

export const riwayatPenyakitSchema = z.object({
  riwayat_penyakit: z.string().optional(),
})

export type submitRegisterData = z.infer<typeof registerSchema>;
export type submitTanggalLahirData = z.infer<typeof tanggalLahirSchema>;
export type submitJenisKelaminData = z.infer<typeof jenisKelaminSchema>;
export type submitBeratBadanData = z.infer<typeof beratBadanSchema>;
export type submitTinggiBadanData = z.infer<typeof tinggiBadanSchema>;
export type submitRiwayatDiabetesData = z.infer<typeof riwayatDiabetesSchema>;
export type submitRiwayatPenyakitData = z.infer<typeof riwayatPenyakitSchema>;
