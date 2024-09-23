import homeIcon from "../assets/image/house.svg";
import backIcon from "../assets/image/caret-left.svg";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header class="header">
            <div class="header-container">
                <Link to="/" class="btn-back">
                    <img src={backIcon} alt="backbtn" />
                </Link>
                <span>In-News</span>
                <Link to="/categories" class="btn-category">
                    <img src={homeIcon} alt="home" />
                </Link>
            </div>
        </header>
    );
}

export default Header;