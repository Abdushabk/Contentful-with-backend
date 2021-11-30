import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/post";
import axios from "axios";

const MealTime = () => {
  const { mealtime } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const recipes = await axios.get(
        "https://avc-food-blog.herokuapp.com/api/recipes/"
      );
      setPosts(recipes.data.tuples.filter(filterPosts));
      console.log(recipes.data.tuples);
    })();
  }, [mealtime]);

  if (error) return <div>{error}</div>;

  const filterPosts = (post) => {
    return mealtime[0] ? post.category === mealtime[0].toUpperCase() : true;
  };

  return (
    <div className="mealContainer">
      <p>
        We have {posts.length} entries for {mealtime}
      </p>

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default MealTime;
