import React, { useReducer, useState, useEffect } from 'react';
import style from './Header.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { cyeta } from './../../state'
import { Grid } from '@material-ui/core';
import state from '../../state';
import Form from './FormLoginDa/Costilform'


const Header = (props) => {
    let [chb1, setChb1] = useState(false);
    let [chb2, setChb2] = useState(false)
    let userName = '';
    let [userNameRole, setUserNameRole] = useState(0);
    if (userNameRole == 0) {
        userName = 'Гость';
    } else {
        state.users.map((user) => {
            if (user.id == userNameRole)
                return (
                    userName = user.name
                )
        });
    }
    const ClickReg = () => {
        setChecked_btn(checked_btn = false);
        setChb2(chb2 = false)
        if (!chb1) {
            setChb1(chb1 = true)
        } else {
            setChb1(chb1 = false)
        }
    }
    const ClickLog = () => {
        setChecked_btn(checked_btn = false);
        setChb1(chb1 = false)
        if (!chb2) {
            setChb2(chb2 = true)
        } else {
            setChb2(chb2 = false)
        }
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
        setChb1(chb1 = false)
        setChb2(chb2 = false)
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
                            <input type="checkbox" className={style.checkbox_signup__disabled} checked={chb1} />
                            <label className={style.button_signup_btn} onClick={ClickReg}>Регистрация</label>
                            <div className={style.bok_menu_signup}>
                                <form className={style.form_signup} onSubmit={handleSubmit(onSubmit)}>
                                    <div className={style.title_block_signup}>
                                        <p className={style.title_bok_menu_signup}>Регистрация</p>
                                        <img className={style.style_bok_menu_signup_close} src="krest.png" alt="" width="50px" height="50px" onClick={ClickReg} />
                                    </div>
                                    <div className="">
                                        <label for="login">Логин</label>
                                        <input ref={register} type="text" name="login" className={style.input_in_signup} />
                                    </div>
                                    <div className="">
                                        <label for="email">Почта</label>
                                        <input ref={register} type="email" name="email" className={style.input_in_signup} />
                                    </div>
                                    <div className="">
                                        <label for="password">Пароль</label>
                                        <input ref={register} type="password" name="password" className={style.input_in_signup} />
                                    </div>
                                    <div className="">
                                        <label for="confirm_password">Повторите пароль</label>
                                        <input ref={register} type="password" name="confirm_password" className={style.input_in_signup} />
                                    </div>
                                    <input type="submit" value="Зарегистрироваться" className={style.btn_from_signup_form} />
                                    <p className={style.again_password_text}>Забыли пароль?</p>
                                    <p className={style.user_sogl}>Пользовательское соглашение</p>
                                </form>
                            </div>
                        </div>
                        <div className={style.button_login}>
                            <input type="checkbox" id="login" className={style.checkbox_login__disabled} checked={chb2} />
                            <label for="login" className={style.button_login_btn} onClick={ClickLog}>Войти</label>
                            <div className={style.bok_menu_login}>
                                <div className={style.form_login} >
                                    <div className={style.title_block_login}>
                                        <p className={style.title_bok_menu_login}>Авторизация</p>
                                        <img className={style.style_bok_menu_login_close} src="krest.png" alt="" width="50px" height="50px" onClick={ClickLog}/>
                                    </div>
                                        <Form/>
                                    <p className={style.again_password_text}>Забыли пароль?</p>
                                    <p className={style.user_sogl}>Пользовательское соглашение</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.input_nickname}>
                            <p className={style.input_nickname__text}>{userName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Header;

