import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Logout } from "../../images/svg/index";

function Navigation({ blackTheme, clickAuthHandler, isMenuOpened, loggedIn, handleLogout }) {
    return (
        <div className={`navigation ${isMenuOpened && 'navigation_opened'}`}>
            <div className="navigation__block">
                {isMenuOpened && <p className="navigation__logo">NewsExplorer</p>}
                <nav className="navigation__links-list">
                    <NavLink exact to="/" className={`navigation__link ${blackTheme ? 'navigation__link_black' : 'navigation__link_white'}`} activeClassName="navigation__link_disabled">Главная</NavLink>
                    {   loggedIn &&
                        <NavLink to="/saved-news" className={`navigation__link ${blackTheme ? 'navigation__link_black' : 'navigation__link_white'}`} activeClassName="navigation__link_disabled">Сохранённые статьи</NavLink>
                        }
                </nav>
                { !loggedIn ?
                    <button onClick={clickAuthHandler} type="button" className={`navigation__button navigation__button_type_auth ${blackTheme ? 'navigation__button_black' : 'navigation__button_white'}`}>Авторизоваться</button>
                    :
                    <button onClick={handleLogout} type="button" className={`navigation__button navigation__button_type_logout ${blackTheme ? 'navigation__button_black' : 'navigation__button_white'}`}>
                        Грета
                        <Logout color={`${blackTheme ? '#fff' : '#1A1B22'}`} width="18" height="16" />
                    </button>
                }
            </div>
        </div>
    )
};

export default Navigation;