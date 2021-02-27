import NewsCard from '../NewsCard/NewsCard';
import { Trash } from '../../images/svg/index';

function NewsCardSaved({ card, showTag, handleArticleDelete }) {

    function handleDeleteCard() {
        handleArticleDelete(card);
    }

    return ( 
        <NewsCard card={{
            urlToImage: card.image,
            title: card.title,
            keyword: card.keyword,
            url: card.link,
            publishedAt: card.date,
            content: card.text,
            source: card.source
        }} showTag={showTag} >
            <button type="button" className="news-card__button-delete" onClick={handleDeleteCard}>
                    <Trash width="24px" height="24px" className="news-card__trash-icon" />
                </button>
                <div className="new-card__delete-note">
                    <p className="new-card__delete-text">Убрать из сохранённых</p>
                </div>
        </NewsCard>
    )
}

export default NewsCardSaved;