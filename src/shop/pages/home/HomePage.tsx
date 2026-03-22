import {CustomPagination} from "@/components/custom/CustomPagination";
import { FilterSidebar } from "../../components/FilterSidebar";
import { ProductsGrid } from "../../components/ProductsGrid";  
 import { categories } from "@/mocks/categories.mock";
import { useProducts } from "@/shop/hooks/useProducts";

export const HomePage = () => {

  const { data} = useProducts(); 


  
  return (
    <div className="flex gap-6">  
      <FilterSidebar categories={categories} />
      <div className="flex-1 p-6">
        <ProductsGrid products={data?.items || []} />
        <CustomPagination totalPages={data?.totalPages || 1} />
      </div>
    </div> 
  );
}