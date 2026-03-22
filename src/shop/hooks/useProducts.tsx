import { useQuery } from "@tanstack/react-query" 
import { getProductsAction } from "../actions/get-products.actions"
import { useSearchParams } from "react-router";
import { useParams } from "react-router";

export const useProducts = () => {

    const [ searchParams ] = useSearchParams();
    const { categoryName } = useParams();
    const pageNumber = searchParams.get('page') || 1;
    const pageSize = searchParams.get('size') || 2; 
    const categoryFromQuery  = searchParams.get('category') ||  undefined
    const minPrice = searchParams.get('minprice') || undefined;
    const maxPrice = searchParams.get('maxprice') || undefined;
    const search = searchParams.get('q') || undefined;
    
    //combine a search for categoryName with the one from searchParams
    const combinedCategoryNames = [
        categoryName,
        ...(categoryFromQuery ? categoryFromQuery.split(',') : [])
        ]
        .filter(Boolean)
        .map((c) => (c as string).trim())
        .filter((value, index, array) => array.indexOf(value) === index)
        .join(',');
    console.log('combinedCategoryNames: ', combinedCategoryNames);


return useQuery({
    queryKey: ['products', { pageNumber, pageSize, combinedCategoryNames, minPrice, maxPrice, search }],
    queryFn: () =>getProductsAction({ 
        PageNumber: pageNumber,
        PageSize: pageSize,
        CategoryNames: combinedCategoryNames,
        MinPrice: minPrice,
        MaxPrice: maxPrice,
        Search: search
    }),
});

}