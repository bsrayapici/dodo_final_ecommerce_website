import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from '../components/CategoryPick';
import ProductCategoryList from "../components/ProductCategoryList";


const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
    </div>
  );
};

export default HomePage;