import Header from "./components/header/Header.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MENU_LIST } from "./components/constants.js";
import { FOOTER_MENU_LIST } from "./components/constants.js";
import Footer from "./components/footer/Footer.js";
import NotFound from "./components/pages/NotFound.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          {MENU_LIST.map((item) => {
            return <Route path={item.link} element={item.element} />;
          })}
          {FOOTER_MENU_LIST.map((item) => {
            return item.list.map((subelement) => {
              return (
                <Route
                  exact
                  path={subelement.link}
                  element={subelement.element}
                />
              );
            });
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
