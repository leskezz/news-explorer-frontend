import './PopupWithForm.css';
import { Close } from '../../images/svg/index';

function PopupWithForm ({ isOpen, name, onSubmit, title, buttonName, onClose, authOrRegister, changePopup, isValid, children }) {
    return (
        <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>

            <form name={name} className="popup__form" onSubmit={onSubmit}>

                <h3 className="popup__heading">{title}</h3>
                    
                {children}

                <span className="popup__server-error">Такой пользователь уже есть</span>
                <button type="submit" className="popup__save-button" disabled={!isValid} >{buttonName} </button>
                    
                <button type="button" className="popup__close-button" onClick={onClose}>
                    <Close width="40px" height="40px" />
                </button>
                <p className="popup__change-popup">или <span onClick={changePopup} className="popup__change-button">{authOrRegister}</span></p>
            </form>

        </section>
    )
};

export default PopupWithForm;