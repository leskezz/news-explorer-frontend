import { useContext } from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCardSaved from '../NewsCardSaved/NewsCardSaved';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { sortByKeyword } from '../../utils/SortArticles';

function SavedNews({ savedArticles, handleArticleDelete }) {

    const currentUser = useContext(CurrentUserContext);
    
    const sortedArticles = sortByKeyword(savedArticles);

    return (
        <section className="saved-news">
            <div className="saved-news__count">
                <p className="saved-news__top">
                    Сохранённые статьи
                </p>
                <h2 className="saved-news__title">
                    {`${currentUser.name}, у вас ${savedArticles.length} сохранённых статей`}
                </h2>
                <p className="saved-news__tags">
                    По ключевым словам:
                        <span className="saved-news__tags-span">
                            {sortedArticles.length > 0 && ` ${sortedArticles[0][0]}`}
                            {sortedArticles.length > 1 && `, ${sortedArticles[1][0]} `}
                        </span>
                    {sortedArticles.length > 2 && 'и '}
                        {sortedArticles.length > 2 &&
                            <span className="saved-news__tags-span">{ (sortedArticles.length === 3) ? sortedArticles[2][0] : ` ${sortedArticles.length - 2}-м другим` }</span>
                        }
                </p>
            </div>
            <NewsCardList cards={savedArticles} showTag={true} handleArticleDelete={handleArticleDelete} component={NewsCardSaved}>
            </NewsCardList>
        </section>
    )
};

export default SavedNews;