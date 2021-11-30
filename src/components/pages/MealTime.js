import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/post";
import axios from "axios";

const MealTime = ({ categories }) => {
  const { mealtime } = useParams();
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [ctgName, setCtgName] = useState("");

  useEffect(() => {
    (async () => {
      const recipes = await axios.get(
        "https://avc-food-blog.herokuapp.com/api/recipes/"
      );
      setPosts(recipes.data.tuples.filter(filterPosts));
    })();
  }, [mealtime]);

  if (error) return <div>{error}</div>;

  const filterPosts = (post) => {
    if (mealtime[0]) {
      if (post.category === mealtime[0].toUpperCase()) {
        setCtgName(catName(mealtime[0]).name);
        return true;
      } else return false;
    } else {
      return true;
    }
    // return mealtime[0] ? post.category === mealtime[0].toUpperCase() : true;
  };

  const catName = (id) => {
    let found = categories.find(
      (el) => el.category_id.toUpperCase() === id.toUpperCase()
    );

    return found;
  };

  return (
    <div className="mealContainer">
      <p>
        We have {posts.length} entries for {ctgName}
      </p>

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default MealTime;
