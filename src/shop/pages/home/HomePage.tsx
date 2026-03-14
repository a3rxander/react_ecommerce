import {CustomPagination} from "@/components/custom/CustomPagination";
import { FilterSidebar } from "../../components/FilterSidebar";
import { ProductGrid } from "../../components/ProductGrid";
import { Filter } from "lucide-react";

export const HomePage = () => {
  return (
    <div>  
    <FilterSidebar />
    <ProductGrid />
    <CustomPagination totalPages={10} />
    </div>
  );
}