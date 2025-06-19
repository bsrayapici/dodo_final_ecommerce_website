import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from '../components/CategoryPick';
import ProductCategoryList from "../components/ProductCategoryList";
import Slider from "../components/Slider";
import CtaSection from "../components/CtaSection";
import FeaturedPosts from "../components/FeaturedPosts";




const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <Slider />
      <CtaSection />
      < FeaturedPosts />
    </div>
  );
};

export default HomePage;