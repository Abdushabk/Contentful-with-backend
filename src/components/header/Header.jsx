import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitlesSm">Food Recipes</span>
          <span className="headerTitlesLg">
            We bring u the best food from the best places
          </span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/4651196/pexels-photo-4651196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="img"
        />
      </div>
    </div>
  );
}
