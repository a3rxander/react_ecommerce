import {CustomPagination} from "@/components/custom/CustomPagination";
import { FilterSidebar } from "../../components/FilterSidebar";
import { ProductsGrid } from "../../components/ProductsGrid"; 
 import  { products } from '@/mocks/products.mock'
 import { categories } from "@/mocks/categories.mock";

export const HomePage = () => {
  return (
    <div className="flex gap-6">  
      <FilterSidebar categories={categories} />
      <div className="flex-1 p-6">
        <ProductsGrid products={products} />
        <CustomPagination totalPages={10} />
      </div>
    </div> 
  );
}