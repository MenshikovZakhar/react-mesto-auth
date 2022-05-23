import headerLogo from '../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import settingsButton from "../images/header_settings.svg";

export default function Header(props) {
    const { pathname } = useLocation();
    const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
    const linkRoute = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип Место" />
            <div>
                {props.loggedIn ?
                    (<div className="header__wrap">
                        <p className="header__email">{props.email}</p>
                        <Link className="header__sign-out" to="" onClick={props.onLogOut}>Выйти</Link>
                    </div>) : (<Link to={linkRoute} className="header__link">{linkText}</Link>)
                }
            </div>
            {props.loggedIn ? (
                <img
                    onClick={props.onSettings}
                    src={settingsButton}
                    className="header__menu-settings"
                    alt='настройки'
                />
            ) : (
                ""
            )}


        </header>
    );
}