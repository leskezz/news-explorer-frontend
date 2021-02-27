import {useState} from 'react';
import './SearchForm.css';
import { useForm } from '../../utils/FormController';

function SearchForm({ onSubmit }) {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const {values, handleChange, isValid} = useForm();

    function handleClickSearch() {
        setIsSearchClicked(!isSearchClicked);
    }

    function handleSubmitSearch(e) {
        e.preventDefault();
        onSubmit(values.searchInput);
    }

    

    return(
        <form className="search-form" name="search" onSubmit={handleSubmitSearch}>
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
                name="searchInput"
                minLength="2"
                maxLength="40"
                value={values.searchInput || ''}
                onChange={handleChange}
                required
                ></input>
                <button disabled={!isValid} onMouseUp={handleClickSearch} onMouseDown={handleClickSearch} type="submit" className={`search-form__submit ${isSearchClicked && 'search-form__submit_clicked'}`}>Искать</button>
            </fieldset>
        </form>
    )
};

export default SearchForm;