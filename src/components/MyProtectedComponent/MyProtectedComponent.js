import Header from '../Header/Header';
import SavedNews from '../SavedNews/SavedNews';

function MyProtectedComponent({ clickAuthHandler, isPopupOpen, blackTheme, loggedIn, handleLogout, userName }) {
    return (
        <> 
            <Header
                clickAuthHandler={clickAuthHandler}
                blackTheme={blackTheme}
                isPopupOpen={isPopupOpen}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                userName={userName}
            />
            <SavedNews />
        </>
    )
}

export default MyProtectedComponent;
