import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            
            <div className={style.footer_list}>
            <ul>
                <li>Вконтакте</li>
                <li>Instagram</li>
                <li>Telegram</li>
                <li>Odniklassniki</li>
                <li>Patreon</li>
            </ul>
            <ul>
                <li>Контакты</li>
                <li>О нас</li>
                <li>О вас</li>
                <li>О ком-то</li>
            </ul>
            <ul>
                <li>Пользовательское соглашение</li>
                <li>FAQ</li>
                <li>Системные требования</li>
            </ul>
            <Link to="/reviews">
            <input type="submit" value="Отзывы" className={style.button_from_otzivi} />
            </Link>
            </div>
            
        </footer>
    );
}
export default Footer;