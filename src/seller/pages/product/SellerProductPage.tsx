 
import { useMyProduct } from "@/seller/hooks/useMyProduct"; 
import {  Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { CreateProduct } from "@/types/product.types"; 
import { FormProductPage } from "./FormProductPage";


export const SellerProductPage = () => {
  const {productId } = useParams();  
  const isCreating = productId === "new";
  const { data: product, isError, isLoading } = useMyProduct(productId || '');
 
 const handleSubmit = async (payload: CreateProduct) => {
    console.log("Form payload:", payload);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  }

  if (isLoading) return <div>Cargando...</div>


  if (isError) {
    return <Navigate to="/seller/products" />;
  }

  
  if (!product) {
    return <Navigate to="/seller/products" />;
  }

  console.log("Product data:", product);

  return (
    <div className="space-y-6">
      <FormProductPage product={product} isCreating={isCreating} onSubmit={handleSubmit} />
    </div>
  );
}