import { Link } from "react-router-dom";
import Footer from "../../Footer";

import Header from "../../header/Header";

import Posts from "../../Posts/Posts";

import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Link to="/breakfast"></Link>
      </div>

      <Posts />
      <div>
        <Footer />
      </div>
    </>
  );
}
