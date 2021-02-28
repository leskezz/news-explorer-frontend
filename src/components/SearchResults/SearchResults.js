import { useState } from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCardFromSearch from '../NewsCardFromSearch/NewsCardFromSearch';
import { countVisibleCards } from '../../utils/constants'

function SearchResults({ newsFound, handleArticleSave, searchKeyword, loggedIn, openAuthPopup }) {

    const [cardsCount, setCardCount] = useState(countVisibleCards);

    function handleClickMoreButton() {
        setCardCount(cardsCount + countVisibleCards)
    }

    return (
        <section className="search-results">
            <div className="flexbox-column">
                <h2 className="search-results__title">Результаты поиска</h2>
                <NewsCardList loggedIn={loggedIn} cards={newsFound.slice(0, cardsCount.toString())} showTag={false} searchKeyword={searchKeyword} handleArticleSave={handleArticleSave} component={NewsCardFromSearch} openAuthPopup={openAuthPopup} />
                <button type="button" className="search-results__more-button" onClick={handleClickMoreButton}>Показать еще</button>
            </div>
        </section>
    )
};

export default SearchResults;