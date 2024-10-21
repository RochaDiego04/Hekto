import FeaturedProducts from "../../components/FeaturedProducts";
import LatestProducts from "../../components/LatestProducts";
import UniqueBanner from "../../components/UniqueBanner";
import TrendingProducts from "../../components/TrendingProducts";
import DiscountItems from "../../components/DiscountItems";
import TopCategories from "../../components/TopCategories";
import NewsLetter from "../../components/NewsLetter";
import LatestBlogs from "../../components/LatestBlogs";
import CardSlider from "../../components/Slider/CardSlider";

export default function Home() {
  return (
    <>
      <CardSlider />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueBanner />
      <TrendingProducts />
      <DiscountItems />
      <TopCategories />
      <NewsLetter />
      <LatestBlogs />
    </>
  );
}
