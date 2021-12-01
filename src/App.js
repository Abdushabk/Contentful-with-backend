import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarTop from "./components/NavbarTop";
import Home from "./components/pages/home/Home";
import MealTime from "./components/pages/MealTime";
import SingleRecipe from "./components/SingleRecipe";
import SearchMeals from "./components/pages/SearchMeals";
import Login from "./components/pages/Login";

function App() {
  const [searchQry, setSearchQry] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await axios.get(
        "https://avc-food-blog.herokuapp.com/api/categories/"
      );
      await setCategories(results.data.tuples);
      console.log(results.data.tuples);
    })();
  }, []);

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (e.target.form[0].value !== "") {
      setSearchQry(e.target.form[0].value);
      e.target.form[0].value = "";
    } else {
      alert("Please enter something in search");
    }
  };

  const handleClearQry = () => setSearchQry("");

  return (
    <>
      <NavbarTop
        handleSearchClick={handleSearchClick}
        handleClearQry={handleClearQry}
        categories={categories}
      />

      {searchQry ? (
        <SearchMeals searchQry={searchQry} handleClearQry={handleClearQry} />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:mealtime" element={<MealTime />} />
          <Route exact path="/recipe/:id" element={<SingleRecipe />} />
          <Route exact path="/Login" element={<Login />} />
         
        </Routes>
      )}
    </>
  );
}

export default App;
