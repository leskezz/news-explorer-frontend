import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, showTag, children }) {

    return (
        <div className="news-card-list">
        <ul className="news-card-list__grid">
            {
                
                cards.map ((card, index) => (
                    <NewsCard key={index} card={card} children={children} showTag={showTag}></NewsCard>
                ))
            }
        </ul>
        </div>
    )
}

export default NewsCardList;