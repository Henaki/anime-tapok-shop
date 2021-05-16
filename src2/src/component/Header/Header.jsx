import React from 'react';
import style from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <div className={style.header_main}>
                <div className={style.header_content}>
                    <input type="submit" name="toggler" value="_ _ _" />
                    <Link to="/">
                    <a><img src="logo.jpg" height="150" width="250"/></a>
                    </Link>
                    <div className={style}></div>
                    <div className={style}></div>
                    <div className={style.search_window_in_header}>
                    <input type="text" className={style.search_input} name="search" />
                    <input type="submit" className={style.search_button} name="search_button" value="/*" />
                    </div>
                    <div className={style.inputs_sign_login}>
                        <input type="submit" className={style.button_signup} value="Регистрация" name="signup"/>
                        <input type="submit" className={style.button_login} value="Войти" name="login"/>
                    </div>
                    <div className={style}>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Header;