import ImageSlider from "../../components/Slider/CardSlider";
import FeaturedProducts from "../../components/FeaturedProducts";
import LatestProducts from "../../components/LatestProducts";
import UniqueBanner from "../../components/UniqueBanner";
import TrendingProducts from "../../components/TrendingProducts";
export default function Home() {
  return (
    <>
      <ImageSlider />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueBanner />
      <TrendingProducts />
    </>
  );
}
