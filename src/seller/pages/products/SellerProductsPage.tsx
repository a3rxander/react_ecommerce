import { Button } from "@/components/ui/button";
import { 
  Plus,      
} from "lucide-react";
import { Link } from "react-router-dom";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import {useMyProducts} from "../../hooks/useMyProducts";

export const SellerProductsPage = () => {
    const { data: products, isLoading } = useMyProducts();

  if (isLoading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
         <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products || []} />
    </div>
         
      </div>
 
 
      
    </div>
  );
}