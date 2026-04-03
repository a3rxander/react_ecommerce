 
import { useMyProduct } from "@/seller/hooks/useMyProduct"; 
import {  Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { CreateProduct } from "@/types/product.types"; 
import { FormProductPage } from "./FormProductPage";
import { toast } from "sonner";


export const SellerProductPage = () => {
  const {productId } = useParams();  
  const navigate = useNavigate();
    
  const isCreating = productId === "new";
  const { data: product, isError, isLoading, mutation  } = useMyProduct(productId || '');
 
 const handleSubmit = async (payload: CreateProduct) => {
 
  await mutation.mutateAsync(payload, {
    onSuccess: (data) => {
      console.log("Producto creado/actualizado exitosamente:", data);
      toast.success(`Producto ${isCreating ? "creado" : "actualizado"} exitosamente!`, {
        position: "top-right",        duration: 3000,
      });
      navigate(`/seller/products/${data.id}`);  
    },
    onError: (error) => {
      // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
      console.error("Error al crear/actualizar el producto:", error);
      toast.error(`Error al ${isCreating ? "crear" : "actualizar"} el producto. Por favor, inténtalo de nuevo.`);
    } 
  });
  }

  if (isLoading) return <div>Cargando...</div>


  if (isError) {
    return <Navigate to="/seller/products" />;
  }

  
  if (!product) {
    return <Navigate to="/seller/products" />;
  }
 

  return (
    <div className="space-y-6">
      <FormProductPage product={product} isCreating={isCreating} onSubmit={handleSubmit}  isPending={mutation.isPending} />
    </div>
  );
}