import React from 'react';
import './PopupAuth.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/FormController';

function PopupAuth({ isOpen, onClose, changePopup, loginError, onSubmit }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmitLogin(e) {
        e.preventDefault();
        onSubmit({ user: values, resetForm: resetForm });
    }

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
        onSubmit={handleSubmitLogin}
        isValid={isValid}
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
                    value={values.email || ''}
                    onChange={handleChange}
                />
                <span className="popup-auth__error">{errors.email}</span>
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
                    value={values.password || ''}
                    onChange={handleChange}
                />
                <span className="popup-auth__error">{errors.password}</span>
            </div>
            
        </fieldset>
    </PopupWithForm>
  );
}

export default PopupAuth;