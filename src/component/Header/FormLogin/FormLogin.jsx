import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import style from './FormLogin.module.css'
import axios from 'axios';
import { message, Drawer } from 'antd';
import 'antd/dist/antd.css';
import Cookies from 'js-cookie'

const FormLogin = () => {
    const [visible, setVisible] = useState(false);
    let [user, setUser] = useState()
    
    const showDrawer = () => {
        setVisible(true);

    };
    const onClose = () => {
        setVisible(false);
    };

    const [userName, setUserName] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const urlAPI = "http://at-shop/api/login";
        axios.post(urlAPI, data).then((data) => {
            console.log(data);
            message.success("Вы авторизовались");
            setUser(user = data.data.body.token.plainTextToken)
            Cookies.set('jwt_token_debil', user)
            Cookies.set('login', data.data.body.user)
            console.log(Cookies.get('jwt_token_debil'));
            console.log(Cookies.get('login'));
            window.location.reload()
        });

    };

    return (
        <>
            <p className={style.button_login_btn} onClick={showDrawer}>Войти</p>
            <Drawer
                width="320px"
                title="Войти"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            ><form className={style.form_style_login} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.form_login_main}>
                        <div className="">
                            <label for="email">Почта</label>
                            <input ref={register} type="email" name="email" className={style.input_in_login} />
                        </div>
                        <div className="">
                            <label for="password">Пароль</label>
                            <input ref={register} type="password" name="password" className={style.input_in_login} />
                        </div>
                        <input type="submit" value="Авторизоваться" className={style.btn_from_login_form}/>
                    </div>
                    <div className={style.links_to_kuda_to}>
                        <p className={style.again_password_text}>Забыли пароль?</p>
                        <p className={style.user_sogl}>Пользовательское соглашение</p>
                    </div>
                </form></Drawer>

        </>
    )
}
export default FormLogin;