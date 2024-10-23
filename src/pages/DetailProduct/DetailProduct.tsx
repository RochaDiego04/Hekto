import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../../util/fetchProducts";
import { ProductInfo } from "../../interfaces/ProductInfo";
import FetchError from "../../classes/FetchError";
import ImageShowCase from "../../components/ImageShowCase";
import { formatter } from "../../util/formatPrice";
import Button from "../../components/Button/Button";
import HeartIcon from "../../assets/HeartIcon";
import StarRating from "../../components/StarRating";
import { useAppDispatch } from "../../store/hooks";
import { addItemToCart } from "../../store/cart-slice";

export default function DetailProduct() {
  const { productId } = useParams();

  console.log(productId);

  const {
    data: productData,
    isLoading,
    isError,
    error,
  } = useQuery<{ products: ProductInfo; total: number }, FetchError>({
    queryKey: ["products", { searchId: productId }],
    queryFn: ({ signal }) => fetchProducts({ signal, productId }),
  });

  const dispatch = useAppDispatch();

  function handleCartClick() {
    if (productData) {
      dispatch(addItemToCart(productData.products));
    }
  }

  return (
    <section className="flex gap-5 md:gap-36 p-maxContainer md:p-24">
      {productData && (
        <>
          <ImageShowCase images={productData.products.images} />

          <div className="h-96 pt-10">
            <h3 className="mb-2">{productData.products.title}</h3>
            <StarRating rating={productData.products.stars} className=" mb-6" />
            <p className=" inline-flex gap-4 justify-center mb-6">
              {productData.products.discountPrice ? (
                <>
                  {formatter.format(productData.products.discountPrice)}
                  <span className="text-primary line-through">
                    {formatter.format(productData.products.price)}
                  </span>
                </>
              ) : (
                formatter.format(productData.products.price)
              )}
            </p>
            <p className=" text-grey3 mb-16">
              {productData.products.description}
            </p>
            <div className="flex items-center gap-8">
              <Button
                className="py-3"
                mode="filled"
                href="#"
                onClick={handleCartClick}
              >
                Add To Cart
              </Button>
              <Button
                mode="option"
                className="items-center w-9 h-9"
                href="#"
                Icon={() => (
                  <HeartIcon fillColor="#7e33e0" width="18px" height="18px" />
                )}
              ></Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
