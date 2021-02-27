import React from 'react';
import './PopupAuth.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupAuth({ isOpen, onClose, changePopup, loginError, onSubmit }) {

return (
    <PopupWithForm
        name="auth"
        title="Вход"
        buttonName="Войти"
        authOrRegister="Зарегистрироваться"
        isOpen={isOpen}
        onClose={onClose}
        changePopup={changePopup}
        serverError={loginError}
    >
        <fieldset className="popup-auth">
            <div className="popup-auth__item">
                <label htmlFor="email-auth" className="popup-auth__item-name">Email</label>
                <input
                    id="email-auth"
                    className="popup-auth__input"
                    type="email"
                    name="email"
                    required
                    placeholder="Введите почту"
                />
                <span className="popup-auth__error">Неправильный формат email</span>
            </div>
                
            <div className="popup-auth__item">
                <label htmlFor="password-auth" className="popup-auth__item-name">Пароль</label>
                <input
                    id="password-auth"
                    className="popup-auth__input"
                    type="password"
                    name="password"
                    minLength="2"
                    required
                    placeholder="Введите пароль"
                />
                <span className="popup-auth__error">Пароль должен содержать минимум 2 символа</span>
            </div>
            
        </fieldset>
    </PopupWithForm>
  );
}

export default PopupAuth;