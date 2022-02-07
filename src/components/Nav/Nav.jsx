import "./Nav.scss";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";

const Nav = () => {
    return (
        <nav className="nav">
            <img src={menu} className="nav__item " alt="menu icon" />
            <h2 className="nav__heading">Ear Worm</h2>
            <img src={settings} className="nav__item" alt="settings icon" />
        </nav>
    );
}

// class Nav {
//     render() {
//         return (
//             <nav className="nav">
//                 <img src={menu} className="nav__item " alt="menu icon" />
//                 <h2 className="nav__heading">Ear Worm</h2>
//                 <img src={settings} className="nav__item" alt="settings icon" />
//             </nav>
//         );
//     }
// }

export default Nav;