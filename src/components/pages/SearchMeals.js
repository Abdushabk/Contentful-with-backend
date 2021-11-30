import { useState, useEffect } from "react";
import Post from "../Post/post";
import client from "../../client.js";

const SearchMeals = ({ searchQry, handleClearQry }) => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({ query: searchQry })
      .then(({ items, total }) => {
        setPosts(items);
        setTotal(total);
      })
      .catch(() => {
        setError(
          "Oops! Something happened to this query. Please refresh and try again."
        );
      });
  }, [searchQry]);

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
            <Post
              key={post.sys.id}
              post={post}
              handleClearQry={handleClearQry}
            />
          ))}
        </>
      ) : (
        <h5>`We found NO entries containing the word "{searchQry}"`</h5>
      )}
    </div>
  );
};

export default SearchMeals;
