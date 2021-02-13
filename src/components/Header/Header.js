import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({ blackTheme }) {
    return(
        <header className={`header ${blackTheme ? 'header_black' : 'header_white'}`}>
            <div className={`header__top ${blackTheme ? 'header__top_black' : 'header__top_white'}`}>
                <p className={`header__logo ${blackTheme ? 'header__logo_black' : 'header__logo_white'}`}>NewsExplorer</p>
                <Navigation blackTheme={blackTheme} />
            </div>
            {
                blackTheme && <SearchForm />
            }
        </header>
    )
};

export default Header;