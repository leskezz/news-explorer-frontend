import {useState} from 'react';
import './SearchForm.css';

function SearchForm() {
    const [isSearchClicked, setIsSearchClicked] = useState(false);

    function handleClickSearch() {
        setIsSearchClicked(!isSearchClicked);
    }

    return(
        <form className="search-form" name="search">
            <h1 className="search-form__title">
                Что творится в мире?
            </h1>
            <p className="search-form__description">
            Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
            </p>
            <fieldset className="search-form__input-container">
                <input
                className="search-form__input"
                type="text"
                placeholder="Введите тему новости"
                name="search-input"
                minLength="2"
                maxLength="40"
                required
                ></input>
                <button onMouseUp={handleClickSearch} onMouseDown={handleClickSearch} type="submit" className={`search-form__submit ${isSearchClicked && 'search-form__submit_clicked'}`}>Искать</button>
            </fieldset>
        </form>
    )
};

export default SearchForm;