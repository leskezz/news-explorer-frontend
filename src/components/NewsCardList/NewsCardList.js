import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { cards } from '../../utils/config';

function NewsCardList() {
    return (
        <div className="news-card-list">
            <h2 className="news-card-list__title">Результаты поиска</h2>
            <ul className="news-card-list__grid">
                {
                    cards.map (card => (
                        <NewsCard card={card} />
                    ))
                }
            </ul>
            <button type="button" className="news-card-list__more-button">Показать еще</button>
        </div>
    )
};

export default NewsCardList;