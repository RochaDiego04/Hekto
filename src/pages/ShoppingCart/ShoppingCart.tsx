import Button from "../../components/Button/Button";
import { useAppSelector } from "../../store/hooks";
import { formatter } from "../../util/formatPrice";

export default function ShoppingCart() {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <section className="grid grid-cols-[2fr_1fr] gap-8 p-maxContainer md:p-24 md:px-36">
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div className="flex items-center gap-4 bg-white">
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
                <Button className="p-0 w-8 h-8 small ">-</Button>
                <p className="small w-8 h-8 flex items-center justify-center">
                  2
                </p>
                <Button className="p-0 w-8 h-8 small ">+</Button>
              </div>

              <p className=" font-main">{formatter.format(item.price)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" max-w-[18.75rem]">
        <div className="bg-grey1 p-4 rounded-lg">
          <div className="flex w-full justify-between mr-auto bold p-4 border-b-[1px] border-solid  border-grey2">
            <p>Subtotal:</p>
            <span className="font-main ">$450.00</span>
          </div>
          <div className="flex w-full justify-between mr-auto bold p-4 border-b-[1px] border-solid  border-grey2">
            <p>Total:</p>
            <span className="font-main ">$600.00</span>
          </div>
          <div className="flex w-full justify-between mr-auto small text-grey3 p-4 mb-4">
            <p>Shipping:</p>
            <span>$100.00</span>
          </div>

          <Button className="py-3 w-full" mode="filled">
            Proceed to checkout
          </Button>
        </div>

        <Button className="text-primary block mx-auto p-4">Clear cart</Button>
      </div>
    </section>
  );
}
