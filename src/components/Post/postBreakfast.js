import { Link } from "react-router-dom";
import "./post.css";
import "./cont.css";

export default function Post1() {
  return (
    <div className="post">
      <Link to="/B" className="link">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Breakfast"
        />
      </Link>
      <div className="postInfo">
        <div className="postCats"></div>
        <span className="postTitle">Breakfast</span>
        <p>
          Breakfast kick-starts your metabolism, helping you burn calories
          throughout the day. It also gives you the energy you need to get
          things done and helps you focus at work or at school. Those are just a
          few reasons why it’s the most important meal of the day.
        </p>
      </div>
    </div>
  );
}
