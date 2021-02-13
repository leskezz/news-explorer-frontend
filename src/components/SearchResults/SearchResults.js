import { useState } from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cards } from '../../utils/config';
import { Bookmark } from '../../images/svg/index';

function SearchResults() {
    const [isClickedSaveButton, setIsClickedSaveButton] = useState(false);

    function handleSaveCard() {
        setIsClickedSaveButton(!isClickedSaveButton);
    }

    return (
        <div className="search-results">
            <h2 className="search-results__title">Результаты поиска</h2>
            <NewsCardList cards={cards} showTag={false}>
                <button type="button" className="news-card__button-save" onClick={handleSaveCard} >
                    <Bookmark width="14px" height="19px" borderColor={isClickedSaveButton ? "#2F71E5" : "#1A1B22"} backgroundColor={isClickedSaveButton ? "#2F71E5" : "none"} className={`news-card__bookmark ${isClickedSaveButton ? "news-card__bookmark_active" : "news-card__bookmark_disabled"}`} />
                </button>
                <div className="new-card__auth-note">
                    <p className="new-card__auth-text">Войдите, чтобы сохранять статьи</p>
                </div>
            </NewsCardList>
            <button type="button" className="search-results__more-button">Показать еще</button>
        </div>
    )
};

export default SearchResults;