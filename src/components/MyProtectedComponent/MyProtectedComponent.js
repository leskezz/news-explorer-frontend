import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';

function MyProtectedComponent({ clickAuthHandler, isPopupOpen, blackTheme, loggedIn, handleLogout }) {
    return (
        <> 
            <Header
                clickAuthHandler={clickAuthHandler}
                blackTheme={blackTheme}
                isPopupOpen={isPopupOpen}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
            />
            <SavedNews />
        </>
    )
}

export default MyProtectedComponent;
