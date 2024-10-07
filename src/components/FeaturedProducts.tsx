import ProductCard from "./ProductCard/ProductCard";

const productsData = [
  {
    id: "1",
    productName: "Watches",
    codeCategory: "Y523201",
    price: 42,
  },
  {
    id: "2",
    productName: "Headphones",
    codeCategory: "Y523202",
    price: 90,
  },
  {
    id: "3",
    productName: "Headphones",
    codeCategory: "Y523202",
    price: 90,
  },
  {
    id: "4",
    productName: "Headphones",
    codeCategory: "Y523202",
    price: 90,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="p-maxContainer md:p-24">
      <h2 className=" text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-maxContainer mx-auto justify-center gap-8">
        {productsData.map((productInfo) => (
          <ProductCard
            productInfo={productInfo}
            key={productInfo.id}
          ></ProductCard>
        ))}
      </div>
    </section>
  );
}
