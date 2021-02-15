import './NewsCard.css';

function NewsCard({ card, showTag, children }) {

    return (
        <li className="news-card">
            <img className="news-card__image" src={card.image} alt={card.title}/>
            {children}
            {
                showTag &&
                    <div className="new-card__tag">
                        <p className="new-card__tag-text">
                            {card.tag}
                        </p>
                    </div>
            }
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