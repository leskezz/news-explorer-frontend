import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards }) {
    return (
        <div className="news-card-list">
        <ul className="news-card-list__grid">
            {
                cards.map (card => (
                    <NewsCard card={card} />
                ))
            }
        </ul>
        </div>
    )
}

export default NewsCardList;