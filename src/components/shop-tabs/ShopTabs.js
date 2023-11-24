import { TabContainer, Tab, Nav, Row } from "react-bootstrap";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  SHOP_MAIN_MERCH_LIST,
  SORT_BY,
  STYLE,
} from "../constants.js";
import ShopCategories from "../ShopCategories.js";
import "./ShopTabs.css";
import { useState } from "react";
import NormalWhiteButton from "../buttons/NormalWhiteButton";
import { BsArrowRight } from "react-icons/bs";
import Sort from "../sort/Sort.js";

const sliderParams = {
  slidesPerView: "4",
  navigation: "false",
  pagination: "false",
  direction: "horizontal",
  loop: "false",
  spaceBetween: "30",
};

const ShopTabs = () => {
  const [filtersButtonTitle, setfiltersButtonTitle] = useState("SHOW FILTERS");
  const [filters, setFilters] = useState("none");
  const openFilters = () => {
    setfiltersButtonTitle((currentValue) => {
      return currentValue === "SHOW FILTERS" ? "HIDE FILTERS" : "SHOW FILTERS";
    });
    setFilters((currentValue) => {
      return currentValue === "block" ? "none" : "block";
    });
  };

  const [beers, setBeers] = useState(SHOP_MAIN_BEERS_LIST);
  const [beerPacks, setBeerPacks] = useState(SHOP_MAIN_BEER_PACKS_LIST);
  const [pivolada, setPivolada] = useState(SHOP_MAIN_PIVOLADA_LIST);
  const [merch, setMerch] = useState(SHOP_MAIN_MERCH_LIST);

  return (
    <section class="shop-section">
      <TabContainer id="shop-section" defaultActiveKey="ALL">
        <Row>
          <Nav className="section-title">
            <Nav.Item className="tab-buttons">
              <Nav.Link className="normal-button tab-button" eventKey="ALL">
                ALL
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="BEER PACKS"
              >
                BEER PACKS
              </Nav.Link>
              <Nav.Link className="normal-button tab-button" eventKey="BEERS">
                BEERS
              </Nav.Link>
              <Nav.Link
                className="normal-button tab-button"
                eventKey="PIVOLADA"
              >
                PIVOLADA
              </Nav.Link>
              <Nav.Link className="normal-button tab-button" eventKey="MERCH">
                MERCH
              </Nav.Link>
            </Nav.Item>

            <NormalWhiteButton
              text={filtersButtonTitle}
              icon={<BsArrowRight />}
              click={openFilters}
            />
          </Nav>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="ALL">
              <ShopCategories
                categories={[
                  {
                    category: "BEER PACKS",
                    show: beerPacks,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "BEERS",
                    show: beers,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "PIVOLADA",
                    show: pivolada,
                    sliderParams: sliderParams,
                  },
                  {
                    category: "MERCH",
                    show: merch,
                    sliderParams: sliderParams,
                  },
                ]}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="BEER PACKS">
              <div
                class="filters-section beers-filter"
                style={{ display: filters }}
              >
                <div class="filters-wrapper">
                  <Sort
                    list={SORT_BY}
                    state={beerPacks}
                    stateFn={setBeerPacks}
                    section={"sort-beerpacks"}
                  />
                </div>
                <div class="clear-button">
                  <button>CLEAR ALL FILTERS</button>
                </div>
              </div>
              <ShopCategories
                categories={"BEER PACKS"}
                show={beerPacks}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="BEERS">
              <div
                class="filters-section beers-filter"
                style={{ display: filters }}
              >
                <div class="filters-wrapper">
                  <Sort
                    list={SORT_BY}
                    state={beers}
                    stateFn={setBeers}
                    section={"sort-beers"}
                  />
                  <div class="style">
                    <p class="filter-title">Style</p>
                    {STYLE.map((element) => {
                      const id = element.replace(/\//g, "-").toLowerCase();
                      return (
                        <div>
                          <input type="checkbox" id={id} name={id} />
                          <label for={id}>{element}</label>
                        </div>
                      );
                    })}
                  </div>
                  <div class="alcohol">
                    <p class="filter-title">Alcohol</p>
                    <div>
                      <input type="checkbox" id="zero-five" name="zero-five" />
                      <label for="zero-five">0% - 5%</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="five-seven"
                        name="five-seven"
                      />
                      <label for="five-seven">5% - 7%</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="over-seven"
                        name="over-seven"
                      />
                      <label for="over-seven">Over 7%</label>
                    </div>
                  </div>
                  <div class="color">
                    <p class="filter-title">Color</p>
                    <div>
                      <input
                        type="checkbox"
                        id="to-fifteen-ebc"
                        name="to-fifteen-ebc"
                      />
                      <label for="to-fifteen-ebc">To 15 EBC</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="fifteen-fourty-ebc"
                        name="fifteen-fourty-ebc"
                      />
                      <label for="fifteen-fourty-ebc">15 - 40 EBC</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="over-fourty-ebc"
                        name="over-fourty-ebc"
                      />
                      <label for="over-fourty-ebc">Over 40 EBC</label>
                    </div>
                  </div>
                </div>
                <div class="clear-button">
                  <button>CLEAR ALL FILTERS</button>
                </div>
              </div>
              <ShopCategories
                categories={"BEERS"}
                show={beers}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="PIVOLADA">
              <div
                class="filters-section beers-filter"
                style={{ display: filters }}
              >
                <div class="filters-wrapper">
                  <Sort
                    list={SORT_BY}
                    state={pivolada}
                    stateFn={setPivolada}
                    section={"sort-pivolada"}
                  />
                </div>
                <div class="clear-button">
                  <button>CLEAR ALL FILTERS</button>
                </div>
              </div>
              <ShopCategories
                categories={"PIVOLADA"}
                show={pivolada}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="MERCH">
              <div
                class="filters-section beers-filter"
                style={{ display: filters }}
              >
                <div class="filters-wrapper">
                  <Sort
                    list={SORT_BY}
                    state={merch}
                    stateFn={setMerch}
                    section={"sort-merch"}
                  />
                </div>
                <div class="clear-button">
                  <button>CLEAR ALL FILTERS</button>
                </div>
              </div>
              <ShopCategories
                categories={"MERCH"}
                show={merch}
                sliderParams={sliderParams}
              />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </TabContainer>
    </section>
  );
};

export default ShopTabs;
