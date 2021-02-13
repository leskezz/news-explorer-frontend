import { Link } from 'react-router-dom';
import './Footer.css';
import { Github, Facebook } from '../../images/svg/index';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__nav-block">
                <nav className="footer__nav-links">
                    <Link to="/" className="footer__nav-link">Главная</Link>
                    <a className="footer__nav-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                </nav>
                <ul className="footer__socials">
                    <li className="footer__social">
                        <a className="footer__social-link" href="https://github.com/leskezz" target="_blank" rel="noreferrer">
                            <Github width="24px" height="24px" />
                        </a>
                    </li>
                    <li className="footer__social">
                        <a className="footer__social-link" href="https://www.facebook.com/alekseykozlovsky" target="_blank" rel="noreferrer">
                            <Facebook width="24px" height="24px" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;