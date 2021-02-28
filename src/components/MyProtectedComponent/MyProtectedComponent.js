import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';

function MyProtectedComponent({ clickAuthHandler, isPopupOpen, blackTheme, loggedIn, handleLogout, savedArticles, handleArticleDelete }) {
    return (
        <> 
            <Header
                clickAuthHandler={clickAuthHandler}
                blackTheme={blackTheme}
                isPopupOpen={isPopupOpen}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
            />
            <SavedNews savedArticles={savedArticles} handleArticleDelete={handleArticleDelete} />
        </>
    )
}

export default MyProtectedComponent;
