import './Header.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
    return(
        <header className="header">
            <div className="header__top">
                <p className="header__logo">NewsExplorer</p>
                <Navigation />
            </div>
            <SearchForm />
        </header>
    )
};

export default Header;