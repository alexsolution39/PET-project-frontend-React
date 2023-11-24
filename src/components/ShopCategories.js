import ShopSlider from "./slider/ShopSlider.js";

const ShopCategories = ({ categories, show, sliderParams }) => {
  return Array.isArray(categories) ? (
    categories.map((element) => {
      return (
        <ShopSlider
          list={element.show}
          title={element.category}
          sliderParams={element.sliderParams}
        />
      );
    })
  ) : (
    <ShopSlider list={show} sliderParams={sliderParams} title={categories} />
  );
};

export default ShopCategories;
