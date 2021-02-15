import React from 'react';
import './PopupRegister.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupRegister({ isOpen, onClose, changePopup }) {
    


    return (
        <PopupWithForm
            name="reg"
            title="Регистрация"
            buttonName="Зарегистрироваться"
            authOrRegister="Войти"
            isOpen={isOpen}
            onClose={onClose}
            changePopup={changePopup}
        >
            <fieldset className="popup-auth">
                <div className="popup-auth__item">
                    <label htmlFor="email-reg" className="popup-auth__item-name">Email</label>
                    <input
                        id="email-reg"
                        className="popup-auth__input"
                        type="email"
                        name="email"
                        required
                        placeholder="Введите почту"
                    />
                    <span className="popup-auth__error">Неправильный формат email</span>
                </div>
                <div className="popup-auth__item">
                    <label htmlFor="password-reg" className="popup-auth__item-name">Пароль</label>
                    <input
                        id="password-reg"
                        className="popup-auth__input"
                        type="password"
                        name="password"
                        minLength="2"
                        required
                        placeholder="Введите пароль"
                    />
                    <span className="popup-auth__error">Пароль должен содержать минимум 2 символа</span>
                </div>
                
                <div className="popup-auth__item">
                    <label htmlFor="name" className="popup-auth__item-name">Имя</label>
                    <input
                        id="name"
                        className="popup-auth__input"
                        type="text"
                        name="name"
                        minLength="2"
                        required
                        placeholder="Введите своё имя"
                    />
                    <span className="popup-auth__error">Имя должно содержать минимум 2 буквы</span>
                </div>

            </fieldset>
        </PopupWithForm>
    )
}

export default PopupRegister;