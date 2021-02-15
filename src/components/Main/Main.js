import './Main.css';
import SearchResults from '../SearchResults/SearchResults';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

function Main() {
    return (
        <main className="content">
            <Preloader />
            <NoResults />
            <SearchResults />
            <About />
        </main>
    )
};

export default Main;