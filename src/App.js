import Header from "./components/header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MENU_LIST,
  FOOTER_MENU_LIST,
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_MERCH_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
} from "./components/constants.js";
import Footer from "./components/footer/Footer.js";
import NotFound from "./components/pages/NotFound.js";
import "./App.css";
import { useState } from "react";
import AppContext from "./components/AppContext.js";
import Cart from "./components/cart/Cart.js";

function App() {
  const allProducts = [
    SHOP_MAIN_BEERS_LIST,
    SHOP_MAIN_BEER_PACKS_LIST,
    SHOP_MAIN_MERCH_LIST,
    SHOP_MAIN_PIVOLADA_LIST,
  ];
  const [showCart, setShowCart] = useState(false);
  const toggleShow = () => {
    setShowCart(!showCart);
  };
  const appContext = {
    showCart,
    toggleShow,
  };
  const pathsToProducts = (list, item) => {
    let fullPath = null;
    let element = null;
    let categoryPath = null;
    if (list === SHOP_MAIN_BEER_PACKS_LIST) {
      categoryPath = "shop-beer-packs/";
    } else if (list === SHOP_MAIN_BEERS_LIST) {
      categoryPath = "shop-beers/";
    } else if (list === SHOP_MAIN_MERCH_LIST) {
      categoryPath = "shop-merch/";
    } else {
      categoryPath = "shop-pivolada/";
    }
    fullPath =
      categoryPath +
      item.name
        .toLowerCase()
        .replace(/[^\w ]/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s/g, "-");
    element = item.element;
    return { fullPath, element };
  };
  return (
    <div className="App">
      <AppContext.Provider value={appContext}>
        {showCart ? <Cart /> : null}
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {MENU_LIST.map((item) => {
              return <Route path={item.link} element={item.element} />;
            })}
            {FOOTER_MENU_LIST.map((item) => {
              return item.list.map((subelement) => {
                return (
                  <Route path={subelement.link} element={subelement.element} />
                );
              });
            })}
            {allProducts.map((list) => {
              let productProperties = null;
              return list.map((item) => {
                productProperties = pathsToProducts(list, item);
                return (
                  <Route
                    path={productProperties.fullPath}
                    element={productProperties.element}
                  />
                );
              });
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
