import React from "react";
import { Link } from 'react-router-dom';

function SettingsMobile(props) {
    const className = `header__menu-popup ${props.isOpen ? "header__menu-popup_opened" : ""
        }`;
    return (
        <>
            <section className={className}>
                <p className="header__email">{props.email}</p>
                <Link className="header__sign-out" to="" onClick={props.onLogOut}>Выйти</Link>
            </section>
        </>
    );
}

export default SettingsMobile;

