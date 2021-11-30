import { Link } from "react-router-dom";
import "./post.css";

export default function Post4() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats"></div>
        <span className="postTitle">
          <Link to="/dessert" className="link">
            Dessert
          </Link>
        </span>
        <p>Sweet dessert dishes demand sweet wines. Notable among these are sweet port, sherry, and madeira; Tokaj Aszu of Hungary; sauternes; Greek mavrodaphne; and German Auslese, Beerenauslese, and Trockenbeerenauslese bottlings. Sweet or dry liqueurs and brandies also are offered at the meal’s close.</p>
      </div>
    </div>
  );
}
