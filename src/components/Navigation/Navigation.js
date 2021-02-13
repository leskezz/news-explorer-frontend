import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Logout } from "../../images/svg/index";

function Navigation({ blackTheme, clickAuthHandler }) {
    return (
        <div className="navigation">
            <nav className="navigation__links-list">
                <NavLink exact to="/" className={`navigation__link ${blackTheme ? 'navigation__link_black' : 'navigation__link_white'}`} activeClassName="navigation__link_disabled">Главная</NavLink>
                <NavLink to="/saved-news" className={`navigation__link ${blackTheme ? 'navigation__link_black' : 'navigation__link_white'}`} activeClassName="navigation__link_disabled">Сохранённые статьи</NavLink>
            </nav>
            <button onClick={clickAuthHandler} type="button" className={`navigation__button navigation__button_type_auth ${blackTheme ? 'navigation__button_black' : 'navigation__button_white'}`}>Авторизоваться</button>
            <button type="button" className={`navigation__button navigation__button_type_logout ${blackTheme ? 'navigation__button_black' : 'navigation__button_white'}`}>Грета
                <Logout color={`${blackTheme ? '#fff' : '#1A1B22'}`} width="18" height="16" />
            </button>
        </div>
    )
};

export default Navigation;