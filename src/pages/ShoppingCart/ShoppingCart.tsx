import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { formatter } from "../../util/formatPrice";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  submitCart,
} from "../../store/cart-slice";
import { CartSubmission } from "../../interfaces/CartSubmission";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.cart.items);
  const subtotal = useAppSelector((state) => state.cart.subtotal);
  const shipping = useAppSelector((state) => state.cart.shipping);
  const total = useAppSelector((state) => state.cart.total);

  function handleSubmit() {
    const cartData: CartSubmission = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`, // random id
      items,
      subtotal,
      shipping,
      total,
    };
    dispatch(submitCart(cartData));
  }

  return (
    <>
      {items.length < 1 ? (
        <section className="flex justify-center items-center flex-col gap-8 p-maxContainer md:p-24">
          <img
            className="max-w-[30vw] mx-auto"
            src="/src/assets/shoppingCart/emptyCart.png"
            alt=""
          />
          <h3 className="text-center">Your Cart is Empty</h3>
          <Link to={`/products/`} className="">
            <Button className="py-3 inline-block" mode="filled">
              Start Shopping
            </Button>
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-[2fr_1fr] gap-8 p-maxContainer md:p-24 md:px-36">
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white">
                <img
                  className="w-36 h-24 object-cover rounded-md mr-8"
                  src={item.images[0]}
                  alt={`product image: ${item.title}`}
                />
                <div className="mr-auto">
                  <h5 className="subtitle2 font-main">{item.title}</h5>
                  <p className="font-main">{formatter.format(item.price)}</p>
                </div>
                <div className="flex items-center justify-center gap-6 justify-self-end">
                  <div className="flex items-center justify-center border-[1px] border-solid border-grey2 rounded-lg mr-8">
                    <Button
                      className="p-0 w-8 h-8 small"
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      -
                    </Button>
                    <p className="small w-8 h-8 flex items-center justify-center">
                      {item.quantity}
                    </p>
                    <Button
                      className="p-0 w-8 h-8 small"
                      onClick={() => dispatch(increaseQuantity(item))}
                    >
                      +
                    </Button>
                  </div>
                  <p className="font-main">
                    {formatter.format(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[18.75rem]">
            <div className="bg-grey1 p-4 rounded-lg">
              <div className="flex w-full justify-between mr-auto bold p-4 border-b-[1px] border-solid border-grey2">
                <p>Subtotal:</p>
                <span className="font-main ">{formatter.format(subtotal)}</span>
              </div>
              <div className="flex w-full justify-between mr-auto bold p-4 border-b-[1px] border-solid border-grey2">
                <p>Total:</p>
                <span className="font-main ">{formatter.format(total)}</span>
              </div>
              <div className="flex w-full justify-between mr-auto small text-grey3 p-4 mb-4">
                <p>Shipping:</p>
                <span>{formatter.format(shipping)}</span>
              </div>
              <Button
                className="py-3 w-full"
                mode="filled"
                onClick={handleSubmit}
              >
                Proceed to checkout
              </Button>
            </div>
            <Button
              className="text-primary block mx-auto p-4"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
