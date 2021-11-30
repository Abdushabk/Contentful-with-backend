import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleRecipe.css";

const SingleRecipe = () => {
  const { id } = useParams();
  console.log({ id });

  const [recipies, setRecipies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const results = await axios.get(
        `https://avc-food-blog.herokuapp.com/api/recipes/${id}`
      );
      console.log(results);
      setRecipies(results.data.tuple[0]);
    })();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="recipes">
      <div>
        <div className="title">
          <h2>{recipies.title}</h2>
        </div>

        <div className="img-recipe">
          <img src={recipies.image} alt="img" />
        </div>

        {/* <div className="date">{recipies.date}</div> */}
        <div
          className="date"
          dangerouslySetInnerHTML={{ __html: recipies.ingredients }}
        ></div>

        <div className="description">
          <p dangerouslySetInnerHTML={{ __html: recipies.recipe }}></p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
