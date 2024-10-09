import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../util/http";
import { ProductInfo } from "../../interfaces/ProductInfo";
import FetchError from "../../classes/FetchError";
import ImageShowCase from "../../components/ImageShowCase";

export default function DetailProduct() {
  const { productId } = useParams();

  console.log(productId);

  const {
    data: productData,
    isLoading,
    isError,
    error,
  } = useQuery<ProductInfo, FetchError>({
    queryKey: ["products", { searchId: productId }],
    queryFn: ({ signal }) => fetchProducts({ signal, productId }),
  });

  return (
    <section className="flex">
      <ImageShowCase />
      <div>
        <h3>Headphones</h3>
        {productData && (
          <>
            <p>{productData.title}</p> <p>{productData.description}</p>
          </>
        )}
      </div>
    </section>
  );
}
