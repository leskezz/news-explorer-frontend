import './SearchForm.css';

function SearchForm() {
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
                <button type="submit">Искать</button>
            </fieldset>
        </form>
    )
};

export default SearchForm;