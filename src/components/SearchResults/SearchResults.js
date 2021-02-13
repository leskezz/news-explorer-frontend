import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { cards } from '../../utils/config';

function SearchResults() {
    return (
        <div className="search-results">
            <h2 className="search-results__title">Результаты поиска</h2>
            <NewsCardList cards={cards} />
            <button type="button" className="search-results__more-button">Показать еще</button>
        </div>
    )
};

export default SearchResults;