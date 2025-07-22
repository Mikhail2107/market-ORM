export interface ProductItemProps {
  id: number;
  title: string;
  images: string[];
  price: number;
  discountPercentage: number;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  returnPolicy: string;
  warrantyInformation: string;
}

export interface ProductSearch {
  products: ProductItemProps[];
  total: number;
  limit: number;
  skip: number;
}