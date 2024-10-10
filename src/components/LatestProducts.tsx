import ProductTabs from "./Tabs/ProductTabs";

export default function LatestProducts() {
  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center mb-12">Latest Products</h2>
      <ProductTabs></ProductTabs>
    </section>
  );
}
