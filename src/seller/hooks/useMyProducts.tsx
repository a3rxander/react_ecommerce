
import { useQuery } from "@tanstack/react-query";
import { getMyProductsAction } from "../actions/get-myproducts.action";

export const useMyProducts = () => {   


    return useQuery({
        queryKey: ['myproducts'],
        queryFn: () =>getMyProductsAction(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

}
