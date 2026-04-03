  
import { Link } from "react-router-dom";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import {useMyProducts} from "../../hooks/useMyProducts";

export const SellerProductsPage = () => {
    const { data: products, isLoading } = useMyProducts();
    

  if (isLoading) {
    return <div>Cargando productos...</div>;
  }

  console.log("Productos del vendedor:", products);

  return (
     <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mis Productos</h1>
        <Link
          to="/seller/products/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar Producto
        </Link>
      </div>

      <div className="container mx-auto py-10">
         <DataTable columns={columns} data={products ?? []} />
      </div>
    </div>
  );
}


 