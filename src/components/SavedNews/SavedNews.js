import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { savedCards } from '../../utils/config';
import { Trash } from '../../images/svg/index';

function SavedNews() {
    return (
        <section className="saved-news">
            <div className="saved-news__count">
                <p className="saved-news__top">
                    Сохранённые статьи
                </p>
                <h2 className="saved-news__title">
                    Грета, у вас 5 сохранённых статей
                </h2>
                <p className="saved-news__tags">
                    По ключевым словам:
                        <span className="saved-news__tags-span"> Природа, Тайга </span>
                    и
                        <span className="saved-news__tags-span"> 2-м другим</span>
                </p>
            </div>
            <NewsCardList cards={savedCards} showTag={true}>
                <button type="button" className="news-card__button-delete">
                    <Trash width="24px" height="24px" className="news-card__trash-icon" />
                </button>
                <div className="new-card__delete-note">
                    <p className="new-card__delete-text">Убрать из сохранённых</p>
                </div>
            </NewsCardList>
        </section>
    )
};

export default SavedNews;