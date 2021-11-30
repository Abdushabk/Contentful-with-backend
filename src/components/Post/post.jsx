import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import "./post.css";
import "./cont.css";

export default function Post({ post, handleClearQry }) {
  // eslint-disable-next-line
  const [postToHTML, setPostToHTML] = useState("");

  useEffect(() => {
    setPostToHTML(documentToHtmlString(post.recipe));
  }, [post]);

  return (
    <div className="post">
      <Link to={`/recipe/${post.slug}`} onClick={handleClearQry}>
        <div className="imgCon">
          <img
            className="postImg"
            // src={post.fields.headImg.fields.file.url}
            src={post.image}
            alt="img"
          />
        </div>
        <div className="postInfo">
            <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate"></span>
        </div>
      </Link>
    </div>
  );
}
