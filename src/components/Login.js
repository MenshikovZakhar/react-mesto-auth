import React from 'react';
import { withRouter } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSigninSubmit(e) {
        e.preventDefault();
        props.handleLogin(email, password);
    }

    return (
        <section className="auth">
            <h2 className="auth__title">Вход</h2>
            <form className="auth__form" onSubmit={handleSigninSubmit}>
                <input
                    type="email"
                    onChange={handleEmailChange}
                    className="auth__input"
                    placeholder="Email"
                    value={email}
                    required
                />
                <input
                    type="password"
                    onChange={handlePasswordChange}
                    className="auth__input"
                    placeholder="Пароль"
                    value={password}
                    required
                />
                <button type="submit" className="auth__submit">Войти</button>
            </form>
        </section>
    )
}
export default withRouter(Login);