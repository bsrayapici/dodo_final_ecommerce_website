import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from '../components/CategoryPick';
import ProductCategoryList from "../components/ProductCategoryList";
import Slider from "../components/Slider";



const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <Slider />
    </div>
  );
};

export default HomePage;