import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Logout } from "../../images/svg/index";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navigation__links-list">
                <NavLink to="/" className="navigation__link" activeClassName="navigation__link_disabled">Главная</NavLink>
                <NavLink to="/" className="navigation__link" activeClassName="navigation__link_disabled">Сохранённые статьи</NavLink>
            </nav>
            <button type="button" className="navigation__button navigation__button_type_auth">Авторизоваться</button>
            <button type="button" className="navigation__button navigation__button_type_logout">Грета
                <Logout color="#fff" width="18" height="16" />
            </button>
        </div>
    )
};

export default Navigation;