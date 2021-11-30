import { Link } from "react-router-dom";
import "./post.css";

export default function Post3() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Dinner"
      />
      <div className="postInfo">
        <div className="postCats"></div>
        <span className="postTitle">
          <Link to="/blog" className="link">
            Dinner
          </Link>
        </span>
        <p>We all know that families should eat together, but sometimes it’s tough to find the time. Work, school, sports practices and other obligations all seem to get in the way. But studies show that families who dine at home together are happier and healthier.</p>
      </div>
    </div>
  );
}
