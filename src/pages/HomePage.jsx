import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from '../components/CategoryPick';
import ProductCategoryList from "../components/ProductCategoryList";
import Slider from "../components/Slider";
import CtaSection from "../components/CtaSection";



const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <Slider />
      <CtaSection />
    </div>
  );
};

export default HomePage;