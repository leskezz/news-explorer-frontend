import './Main.css';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

function Main({ isNoResultsOpen, isPreloaderOpen, isSearchSuccess, newsFound, handleArticleSave, searchKeyword, loggedIn }) {
    return (
        <main className="content">
            { isPreloaderOpen && <Preloader /> }
            { isNoResultsOpen && <NoResults /> }
            { isSearchSuccess && <SearchResults loggedIn={loggedIn} newsFound={newsFound} handleArticleSave={handleArticleSave} searchKeyword={searchKeyword}/> }
            <About />
        </main>
    )
};

export default Main;