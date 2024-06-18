import classes from "./Navbar.module.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className={classes.links}>
        <li className={classes.opensans}>
          <a href="#home">HOME</a>
        </li>
        <li className={classes.opensans}>
          <a href="#about">about</a>
        </li>
        <li className={classes.opensans}>
          <a href="#menu">menu</a>
        </li>
        <li className={classes.opensans}>
          <a href="#awards">awards</a>
        </li>
        <li className={classes.opensans}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
