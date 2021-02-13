import './PopupSuccessAuth.css';
import { Close } from '../../images/svg/index';

function PopupSuccessAuth({isOpen, onClick, onClose}) {
    return (
        <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__success-alert">
                <h3 className="popup__success-message">Пользователь успешно зарегистрирован!</h3>
                <p onClick={onClick} className="popup__success-auth">Войти</p>
                <button type="button" className="popup__close-button" onClick={onClose}>
                    <Close width="40px" height="40px" />
                </button>
            </div>
        </section>
    )    
}

export default PopupSuccessAuth;