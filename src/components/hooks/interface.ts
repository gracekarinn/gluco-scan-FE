export interface UserDataInterface {
    id: string;
    username: string;
    gender: string;
    weight: string;
    height: string;
    fullName: string;
    tanggalLahir: Date;
    riwayatDiabetes: boolean;
    riwayatPenyakit: string | null;
    email: string;
    password: string;
    batasGula: Number;
    isAdmin: boolean;
    isPro: boolean;
    proUntil: Date | null;
    createdAt: Date;
    updatedAt: Date;
    refreshToken: string | null;
  }
  