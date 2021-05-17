import React, { useReducer, useState, useEffect } from 'react';
import style from './Header.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { cyeta } from './../../state'
import { Grid } from '@material-ui/core';
import state from '../../state';


const Header = (props) => {
    let userName = '';
    let [userNameRole, setUserNameRole] = useState(0);
    if(userNameRole == 0) {
        userName = 'Гость';
    } else {
        state.users.map((user) => {
            if(user.id == userNameRole)
            return (
                userName = user.name
            )});
    }

    let [state, dispatch] = useReducer(cyeta, "");
    let textContext = React.createContext(state);

    // let [searchText, setSearchText] = useState('');
    let [checked_btn, setChecked_btn] = useState(false);

    let history = useHistory();

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled > 100) {
            setChecked_btn(checked_btn = false);
        }
    })

    const onClick = () => {
        if (checked_btn) {
            setChecked_btn(checked_btn = false);

        } else {
            setChecked_btn(checked_btn = true);
        }
    }


    const handleSe = e => {
        if (true) {
            history.push("/search")
            // state.text = searchText
            // console.log(state.text)            
        }
        // else {
        //     if (searchText.length == 3) {
        //         alert(`Введите ещё ${4 - searchText.length} символ`)
        //     } else {
        //         alert(`Введите ещё ${4 - searchText.length} символа`)
        //     }
        // }
    }



    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (

        <section>
            <div className={style.header_main}>
                <div className={style.header_content}>
                    <label for="bok__menu" className={style.style_bok_menu}>
                        <img className={style.style_bok_menu_img} src="icon_filter.png" alt="" width="50px" height="50px" />
                        <img className={style.style_bok_menu_img_costil} src="icon_filter_costil.png" alt="" width="50px" height="50px" />
                    </label>
                    <input type="checkbox" id="bok__menu" className={style.bok_menu_btn} onClick={onClick} checked={checked_btn} />
                    <div className={style.bok_menu}>
                        <ul>
                            
                            <p className={style.title_bok_menu}>Меню</p>
                            <Link className={style.bok_menu_item} to="/">
                                <li>Главная</li>
                            </Link>
                            <li className={style.bok_menu_item}>Личный кабинет</li>
                            <Link className={style.bok_menu_item} to="/shop">
                                <li>Каталог</li>
                            </Link>
                            <Link className={style.bok_menu_item} to="/reviews">
                                <li>Отзывы</li>
                            </Link>
                            <Link to="/pagination">
                            <li className={style.bok_menu_item}>FAQ</li>
                            </Link>
                            <li className={style.bok_menu_item}>Пользовательское соглашение</li>
                        </ul>
                    </div>
                    {/* <Link to="/">
                        <a><img src="logo.jpg" height="150" width="250" /></a>
                    </Link> */}
                    {/* ПОИСК */}

                    {/* (e => { setSearchText(e.target.value); }) */}
                    <div className={style.search_window_in_header}>
                        <input type="text" onInput={(e) => dispatch({ type: 'ON_INPUT', payload: e.target.value })} onFocus={(e) => dispatch({ type: 'ON_INPUT', payload: " " })} onBlur={(e) => dispatch({ type: 'ON_INPUT', payload: "" })} className={style.search_input} value={state} name="search" placeholder="search for...
                        " />
                        <label onClick={handleSe} className={style.search_button_label} for="search_button" ><img src="loupe.png" className={style.search_button_label_costil} width="30px" height="30px" />
                            <input type="submit" className={style.search_button} name="search_button" value="" />
                        </label>

                    </div>
                    <div className={style.inputs_sign_login}>
                        <div className={style.button_signup}>
                            <input id="bitton_signup" type="submit" value="Регистрация" className={style.button_signup_btn} name="signup" />
                        </div>
                        <div className={style.button_login}>
                            <input id="button_login" type="submit" className={style.button_login_btn} value="Войти" name="login" />
                        </div>
                        <div className={style.input_nickname}>
                            <p className={style.input_nickname__text}>Вы, {userName} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Header;

