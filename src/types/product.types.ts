import type { Category } from "./category.type";

export interface ProductImage {
  id: string;
  imageUrl: string;
  isPrimary: boolean;
  createdAt: string;
  updatedAt: string;
}


export interface Product { 
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  category : Category | null;
  sellerId: string;
  sellerName: string;
  primaryImage: ProductImage | null;
  createdAt: string;
  updatedAt: string; 
}


export interface ProductResponse {
  items: Product[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}