import React from 'react';
import './PopupAuth.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupAuth({ isOpen, onClose, changePopup }) {

return (
    <PopupWithForm
        name="auth"
        title="Вход"
        buttonName="Войти"
        authOrRegister="Зарегистрироваться"
        isOpen={isOpen}
        onClose={onClose}
        changePopup={changePopup}
    >
        <fieldset className="popup-auth">
            <label className="popup-auth__item">
                <p className="popup-auth__item-name">Email</p>
                <input
                    className="popup-auth__input"
                    type="email"
                    name="email"
                    required
                    placeholder="Введите почту"
                />
                <span className="popup-auth__error">Неправильный формат email</span>
            </label>
            <label className="popup-auth__item">
                <p className="popup-auth__item-name">Пароль</p>
                <input
                    className="popup-auth__input"
                    type="password"
                    name="password"
                    minLength="2"
                    required
                    placeholder="Введите пароль"
                />
                <span className="popup-auth__error">Пароль должен содержать минимум 2 символа</span>
            </label>
            
        </fieldset>
    </PopupWithForm>
  );
}

export default PopupAuth;