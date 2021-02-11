import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

function Main() {
    return (
        <main className="content">
            <Preloader />
            <NoResults />
            <NewsCardList />
            <About />
        </main>
    )
};

export default Main;