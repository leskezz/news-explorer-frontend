import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Logout } from "../../images/svg/Logout";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navigation__links-list">
                <NavLink to="/" className="navigation__link" activeClassName="navigation__link_disabled">Главная</NavLink>
                <NavLink to="/" className="navigation__link" activeClassName="navigation__link_disabled">Сохранённые статьи</NavLink>
            </nav>
            <button type="button" className="navigation__auth">Авторизоваться</button>
            <button type="button" className="navigation__logout">Грета
                <Logout color="#fff" width="18" height="16" />
            </button>
        </div>
    )
};

export default Navigation;