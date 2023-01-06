import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/FilterSideBar.module.css";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);

  return (
    <div>
      <div className={styles.FilterByCss}>
      <h3>Filter By</h3>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Novel"
            onChange={handleFilter}
            checked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Motivational"
            onChange={handleFilter}
            checked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Thriller"
            onChange={handleFilter}
            checked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
        <div className={styles.FilterByDiv}>
          <input
            type="checkbox"
            value="Science_Fiction"
            onChange={handleFilter}
            checked={category.includes("Science_Fiction")}
          />
          <label>Science Fiction</label>
        </div>
      </div>
      <div className={styles.SortByCss}>
        <h3>Sort By Order</h3>
        <div onChange={handleSort} className={styles.SortByDiv}>
          <input
            type="radio"
            name="sort_by"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div onChange={handleSort} className={styles.SortByDiv}>
          <input
            type="radio"
            name="sort_by"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
