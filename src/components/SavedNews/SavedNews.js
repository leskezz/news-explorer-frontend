import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';

function SavedNews({ savedArticles, handleArticleDelete }) {

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
            <NewsCardList cards={savedArticles} showTag={true} handleArticleDelete={handleArticleDelete} component={NewsCardSaved}>
            </NewsCardList>
        </section>
    )
};

export default SavedNews;