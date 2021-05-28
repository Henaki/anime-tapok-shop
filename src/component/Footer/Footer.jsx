import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>

            <div className={style.footer_list}>

                <ul>
                    <div className={style.logo_and_copyright}>
                        <li>Лого</li>
                        <li>Copyright</li>
                    </div>
                </ul>

                <ul>
                    <li>Вконтакте</li>
                    <li>Instagram</li>
                    <li>Patreon</li>
                </ul>
                <ul>
                    <li>Пользовательское соглашение</li>
                    <li>FAQ</li>
                    <li>+7-(906)-456-90-04</li>
                </ul>
                <Link to="/reviews">
                    <input type="submit" value="Отзывы" className={style.button_from_otzivi} />
                </Link>
            </div>

        </footer>
    );
}
export default Footer;
