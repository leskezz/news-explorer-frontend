import './NewsCardList.css';

function NewsCardList({ cards, showTag, component: Component, handleArticleSave, searchKeyword, loggedIn, handleArticleDelete, openAuthPopup }) {

    return (
        <div className="news-card-list">
        <ul className="news-card-list__grid">
            {
                
                cards.map ((card, index) => (
                    <Component key={index} card={card} loggedIn={loggedIn} showTag={showTag} handleArticleSave={handleArticleSave} searchKeyword={searchKeyword} handleArticleDelete={handleArticleDelete} openAuthPopup={openAuthPopup} ></Component>
                ))
            }
        </ul>
        </div>
    )
}

export default NewsCardList;