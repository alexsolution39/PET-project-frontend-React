import FilterItem from "./FilterItem.js";
import { STYLE, ALCOHOL, COLOR, QUANTITY } from "../constants.js";
import "./Filters.css";

const filters = { style: [], alcohol: [], color: [], quantity: [] };

const Filters = ({
  productsList,
  stateFn,
  style,
  alcohol,
  color,
  quantity,
  section,
}) => {
  const filterFunction = () => {
    const filtered = productsList.filter((element) => {
      if (filters.style.length === 0) {
        filters.style = STYLE.map((element) => element.id);
      }

      if (filters.alcohol.length === 0) {
        filters.alcohol = ALCOHOL.map((element) => element.id);
      }

      if (filters.color.length === 0) {
        filters.color = COLOR.map((element) => element.id);
      }

      if (filters.quantity.length === 0) {
        filters.quantity = QUANTITY.map((element) => element.id);
      }

      return (
        (filters.style.includes(element.style) &&
          filters.alcohol.includes(element.alcoholFilter) &&
          filters.color.includes(element.colorFilter)) ||
        filters.quantity.includes(element.quantityFilter)
      );
    });

    stateFn((currentValue) => {
      return (currentValue = filtered);
    });
  };

  return (
    <div className="filters-wrapper">
      {style ? (
        <FilterItem
          filtersList={STYLE}
          section={section}
          filtersArr={filters}
          filterKey={"style"}
          filterFunction={filterFunction}
          title={"Style"}
        />
      ) : (
        ""
      )}
      {alcohol ? (
        <FilterItem
          filtersList={ALCOHOL}
          section={section}
          filtersArr={filters}
          filterKey={"alcohol"}
          filterFunction={filterFunction}
          title={"Alcohol"}
        />
      ) : (
        ""
      )}
      {color ? (
        <FilterItem
          filtersList={COLOR}
          section={section}
          filtersArr={filters}
          filterKey={"color"}
          filterFunction={filterFunction}
          title={"Color"}
        />
      ) : (
        ""
      )}
      {quantity ? (
        <FilterItem
          filtersList={QUANTITY}
          section={section}
          filtersArr={filters}
          filterKey={"quantity"}
          filterFunction={filterFunction}
          title={"Quantity"}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Filters;
