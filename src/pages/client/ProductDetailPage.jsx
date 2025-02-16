import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProducts(id);

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
      {/* Add product details here */}
    </div>
  );
};

export default ProductDetailPage;