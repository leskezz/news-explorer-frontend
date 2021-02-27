import React from 'react';
import './PopupRegister.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/FormController';

function PopupRegister({ isOpen, onClose, changePopup, registerError, onSubmit }) {
    
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmitRegister(e) {
        e.preventDefault();
        onSubmit({ user: values, resetForm: resetForm });
    }

    return (
        <PopupWithForm
            name="reg"
            title="Регистрация"
            buttonName="Зарегистрироваться"
            authOrRegister="Войти"
            isOpen={isOpen}
            onClose={onClose}
            changePopup={changePopup}
            serverError={registerError}
            isValid={isValid}
            onSubmit={handleSubmitRegister}
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
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                    <span className="popup-auth__error">{errors.email}</span>
                </div>
                <div className="popup-auth__item">
                    <label htmlFor="password-reg" className="popup-auth__item-name">Пароль</label>
                    <input
                        id="password-reg"
                        className="popup-auth__input"
                        type="password"
                        name="password"
                        minLength="8"
                        required
                        placeholder="Введите пароль"
                        value={values.password || ''}
                        onChange={handleChange}
                    />
                    <span className="popup-auth__error">{errors.password}</span>
                </div>
                
                <div className="popup-auth__item">
                    <label htmlFor="name" className="popup-auth__item-name">Имя</label>
                    <input
                        id="name"
                        className="popup-auth__input"
                        type="text"
                        name="name"
                        minLength="2"
                        maxLength="30"
                        required
                        placeholder="Введите своё имя"
                        value={values.name || ''}
                        onChange={handleChange}
                    />
                    <span className="popup-auth__error">{errors.name}</span>
                </div>

            </fieldset>
        </PopupWithForm>
    )
}

export default PopupRegister;