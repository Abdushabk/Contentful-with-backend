import { Link } from "react-router-dom";
import "./post.css";

export default function Post2() {
  return (
    <div className="post">
      <Link to="/L" className="link">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Lunch"
        />
      </Link>
      <div className="postInfo">
        <div className="postCats"></div>
        <span className="postTitle">Lunch</span>
        <p>
          Lunch is an important part of a healthy diet, which is essential for
          the development, growth and academic performance of school-aged
          children. Currently there is an increasing number of Dutch primary
          schoolchildren who are transitioning from eating lunch at home to
          school.
        </p>
      </div>
    </div>
  );
}
