import './Main.css';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

function Main({ isNoResultsOpen, isPreloaderOpen, isSearchSuccess, newsFound, handleArticleSave, searchKeyword, loggedIn, openAuthPopup }) {
    return (
        <main className="content">
            { isPreloaderOpen && <Preloader /> }
            { isNoResultsOpen && <NoResults /> }
            { isSearchSuccess && <SearchResults loggedIn={loggedIn} newsFound={newsFound} handleArticleSave={handleArticleSave} searchKeyword={searchKeyword} openAuthPopup={openAuthPopup} /> }
            <About />
        </main>
    )
};

export default Main;