import z from "zod";
export interface ProductDetailProps {
  productId: string;
  namaProduk: string;
  kadarGula: number;
  image: string;
  takaran: string;
  energyKcal: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  servingSize: string;
}

export const sajianSchema = z.object({
  sajian: z.string().refine(
    (v) => {
      let n = Number(v);
      return !isNaN(n) && v?.length > 0;
    },
    { message: "Invalid number" }
  ),
});

export type submitSajianData = z.infer<typeof sajianSchema>;