export interface ProductCardProps {
  name: string;
  image: string;
  gula: number;
  weight: string;
}

export interface ProductPromise {
  id: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  kadarGula: number;
  image: string;
  namaProduct: string;
  takaran: string;
  userId: string;
}
