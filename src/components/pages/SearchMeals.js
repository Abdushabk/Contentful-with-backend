import { useState, useEffect } from "react";
import Post from "../Post/post";
import axios from "axios";

const SearchMeals = ({ searchQry, handleClearQry }) => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const recipes = await axios.get(
        "https://avc-food-blog.herokuapp.com/api/recipes/"
      );
      setPosts(recipes.data.tuples.filter(filterPosts));
      setTotal(recipes.data.tuples.filter(filterPosts).length);
      console.log(recipes.data.tuples);
    })();
  }, [searchQry]);

  const filterPosts = (post) => {
    let string = post.title.toLowerCase();
    if (string.indexOf(searchQry.toLowerCase()) !== -1) {
      return true;
    } else {
      // console.log(post);
      // string = post.recipe.toLowerCase();
      // if (string.indexOf(searchQry.toLowerCase()) !== -1) {
      //   return true;
      // } else {
      //   return false;
      // }
      return false;
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      {total > 0 ? (
        <>
          <h5>
            {" "}
            We found {total} entries containing the word "{searchQry}"{" "}
          </h5>
          {posts.map((post) => (
            <Post key={post.slug} post={post} handleClearQry={handleClearQry} />
          ))}
        </>
      ) : (
        <h5>`We found NO entries containing the word "{searchQry}"`</h5>
      )}
    </div>
  );
};

export default SearchMeals;
