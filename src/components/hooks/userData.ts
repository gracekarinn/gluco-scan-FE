"use client";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";

interface UserDataInterface {
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
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string | null;
}

const getUserData = async () => {
  try {
    const response = await fetch("/api/users/data", {
      headers: {
        Authorization: `Bearer ${getCookies().accessToken}`,
      },
    });

    if (response.ok) {
      const userData = await response.json();
      return userData;
    }

    return null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const useUserData = () => {
  const [userData, setUserData] = useState<UserDataInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, isLoading };
};

export default useUserData;
