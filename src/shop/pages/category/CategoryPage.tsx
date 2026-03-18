import { useParams } from "react-router";



export const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <div> CategoryPage: {categoryId}   </div>
  );
}