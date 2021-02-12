import './NoResults.css';
import { NotFound } from '../../images/svg/NotFound';

function NoResults() {
    return (
        <section className="no-results-block">
            <NotFound width="96px" height="96px" color="#D1D2D6" />
            <h2 className="no-results-block__title">Ничего не найдено</h2>
            <p className="no-results-block__description">
                К сожалению по вашему запросу ничего не найдено.
            </p>
        </section>
    )
};

export default NoResults;