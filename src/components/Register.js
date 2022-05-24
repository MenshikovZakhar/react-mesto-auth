import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Register(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegistration(email, password);
    }

    return (
        <section className="auth">
            <h2 className="auth__title">Регистрация</h2>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input
                    className="auth__input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                <input
                    className="auth__input"
                    placeholder="Пароль"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    required
                    minLength="8"
                    maxLength="16"
                />
                <button
                    className="auth__submit"
                    type="submit"
                >
                    Регистрация
                </button>
                <p className="auth__caption">Уже зарегистрированы? <Link className="auth__caption auth__link" to="/sign-in">Войти</Link></p>
            </form>
        </section>
    )

}

export default withRouter(Register)