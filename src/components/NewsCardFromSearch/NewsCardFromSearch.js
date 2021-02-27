import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Bookmark } from '../../images/svg/index';

function NewsCardFromSearch({ card, showTag, handleArticleSave, searchKeyword, loggedIn }) {

    const [isClickedSaveButton, setIsClickedSaveButton] = useState(false);

    function handleSaveCard() {
        const article ={
            keyword: searchKeyword,
            title: card.title,
            text: card.content,
            date: card.publishedAt,
            source: card.source.name,
            link: card.url,
            image: card.urlToImage,
        }
        handleArticleSave(article)
        setIsClickedSaveButton(!isClickedSaveButton);
        
    }

    return (
        <NewsCard card={card} showTag={showTag} >
            <button type="button" className="news-card__button-save" onClick={handleSaveCard} >
                        <Bookmark width="14px" height="19px" borderColor={isClickedSaveButton ? "#2F71E5" : "#1A1B22"} backgroundColor={isClickedSaveButton ? "#2F71E5" : "none"} className={`news-card__bookmark ${isClickedSaveButton ? "news-card__bookmark_active" : "news-card__bookmark_disabled"}`} />
                    </button>
                    { !loggedIn &&
                        <div className="new-card__auth-note">
                        <p className="new-card__auth-text">Войдите, чтобы сохранять статьи</p>
                    </div>
                    }
        </NewsCard>
    )
}

export default NewsCardFromSearch;