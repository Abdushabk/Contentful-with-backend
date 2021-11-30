import "./posts.css";

import Post1 from "../Post/postdinner";
import Post2 from "../Post/postlunch";
import Post3 from "../Post/postdessert";
import Post4 from "../Post/postBreakfast";

export default function Posts() {
  return (
    <div className="posts">
      <Post4 />
      <Post2 />
      <Post1 />
      <Post3 />
    </div>
  );
}
