
import { useQuery } from "@tanstack/react-query"
import { getCategoriesAction } from "../actions/get-categories.action"

export const useCategories = () => {


    const query = useQuery({
        queryKey: ['categories'],
        queryFn:  () => getCategoriesAction(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
    return query;
}