import { useAppSelector } from "../../store/hooks";

export default function ShoppingCart() {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <section>
      <div>
        {items.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
      <div>
        <p>shopping cart</p>
      </div>
    </section>
  );
}
