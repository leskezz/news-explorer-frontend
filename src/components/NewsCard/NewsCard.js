import { useState } from 'react';
import './NewsCard.css';
import { Bookmark } from '../../images/svg/index';

function NewsCard({ card }) {
    const [isClickedSaveButton, setIsClickedSaveButton] = useState(false);

    function handleSaveCard() {
        setIsClickedSaveButton(!isClickedSaveButton);
    }

    return (
        <li className="news-card">
            <img className="news-card__image" src={card.image} alt={card.title}/>
            <button type="button" className="news-card__button-save" onClick={handleSaveCard} >
                <Bookmark width="14px" height="19px" borderColor={isClickedSaveButton ? "#2F71E5" : "#1A1B22"} backgroundColor={isClickedSaveButton ? "#2F71E5" : "none"} className={`news-card__bookmark ${isClickedSaveButton ? "news-card__bookmark_active" : "news-card__bookmark_disabled"}`} />
            </button>
            <div className="new-card__auth-note">
                <p className="new-card-auth-text">Войдите, чтобы сохранять статьи</p>
            </div>
            <article className="news-card__content">
                <a className="news-card__link" href={card.link} rel="noreferrer" target="_blank">
                    <p className="news-card__date">{card.date}</p>
                    <h3 className="news-card__title">{card.title}</h3>
                    <p className="news-card__description">{card.description}</p>
                    <p className="news-card__source">{card.source}</p>
                </a>
            </article>
        </li>
    )
};

export default NewsCard;