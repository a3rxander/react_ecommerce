import {  useParams } from "react-router";
import {CustomPagination} from "@/components/custom/CustomPagination";
import { ProductsGrid } from "../../components/ProductsGrid";
import { useProducts } from "@/shop/hooks/useProducts";



export const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data} = useProducts();

  return (
    <div> 

      <div className="flex-1 p-6">
        <div> Category id {categoryName} </div>
              <ProductsGrid products={data?.items || []} />
              <CustomPagination totalPages={data?.totalPages || 1} />
            </div>

    </div>
    
  );
}