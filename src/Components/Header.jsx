import "../App.css";
import AboutMe from "./AboutMe";

const Header = (props) => {
  return (
    <header>
      <div className="header-image">
        <AboutMe
          translate={props.translate}
          setTranslate={props.setTranslate}
        ></AboutMe>
      </div>
    </header>
  );
};

export default Header;
