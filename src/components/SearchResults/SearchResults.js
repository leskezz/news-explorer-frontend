import { useState } from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { Bookmark } from '../../images/svg/index';

function SearchResults({ newsFound }) {
    const [isClickedSaveButton, setIsClickedSaveButton] = useState(false);
    const [cardsCount, setCardCount] = useState(3);

    function handleSaveCard() {
        setIsClickedSaveButton(!isClickedSaveButton);
    }

    function handleClickMoreButton() {
        setCardCount(cardsCount + 3)
    }

    return (
        <section className="search-results">
            <div className="flexbox-column">
                <h2 className="search-results__title">Результаты поиска</h2>
                <NewsCardList cards={newsFound.slice(0, cardsCount.toString())} showTag={false}>
                    <button type="button" className="news-card__button-save" onClick={handleSaveCard} >
                        <Bookmark width="14px" height="19px" borderColor={isClickedSaveButton ? "#2F71E5" : "#1A1B22"} backgroundColor={isClickedSaveButton ? "#2F71E5" : "none"} className={`news-card__bookmark ${isClickedSaveButton ? "news-card__bookmark_active" : "news-card__bookmark_disabled"}`} />
                    </button>
                    <div className="new-card__auth-note">
                        <p className="new-card__auth-text">Войдите, чтобы сохранять статьи</p>
                    </div>
                </NewsCardList>
                <button type="button" className="search-results__more-button" onClick={handleClickMoreButton}>Показать еще</button>
            </div>
        </section>
    )
};

export default SearchResults;