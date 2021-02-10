import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';


function Main() {
    return (
        <main className="content">
            <Preloader />
            <NewsCardList />
            <About />
        </main>
    )
};

export default Main;