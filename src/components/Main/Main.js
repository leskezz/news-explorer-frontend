import './Main.css';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

function Main({ isNoResultsOpen, isPreloaderOpen, isSearchSuccess, newsFound }) {
    return (
        <main className="content">
            { isPreloaderOpen && <Preloader /> }
            { isNoResultsOpen && <NoResults /> }
            { isSearchSuccess && <SearchResults newsFound={newsFound} /> }
            <About />
        </main>
    )
};

export default Main;