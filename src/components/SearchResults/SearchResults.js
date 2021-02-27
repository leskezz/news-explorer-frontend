import { useState } from 'react';
import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCardFromSearch from '../NewsCardFromSearch/NewsCardFromSearch';

function SearchResults({ newsFound, handleArticleSave, searchKeyword, loggedIn }) {

    const [cardsCount, setCardCount] = useState(3);

    function handleClickMoreButton() {
        setCardCount(cardsCount + 3)
    }

    return (
        <section className="search-results">
            <div className="flexbox-column">
                <h2 className="search-results__title">Результаты поиска</h2>
                <NewsCardList loggedIn={loggedIn} cards={newsFound.slice(0, cardsCount.toString())} showTag={false} searchKeyword={searchKeyword} handleArticleSave={handleArticleSave} component={NewsCardFromSearch} />
                <button type="button" className="search-results__more-button" onClick={handleClickMoreButton}>Показать еще</button>
            </div>
        </section>
    )
};

export default SearchResults;