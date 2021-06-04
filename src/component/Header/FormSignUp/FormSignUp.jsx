import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import style from './FormSignUp.module.css'
import axios from 'axios';
import { message, Drawer } from 'antd';
import 'antd/dist/antd.css';

const FormSignUp = ({ setUser, user }) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        let me_die = data;
        console.log(me_die);
        axios.post('http://at-shop/api/signup', me_die).then((data) => {
            message.success("Регистрация прошла успешно");
        }).catch((error)=> {
            message.error("Что-то пошло не так")
        });
    }
    return (
        <>
            <p className={style.button_signup_btn} onClick={showDrawer}>Регистрация</p>
            <Drawer
                width="320px"
                title="Регистрация"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <form className={style.form_style_signup} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.form_signup_main}>
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
                            <input ref={register} type="password" name="password_confirm" className={style.input_in_signup} />
                        </div>
                        <input type="submit" value="Зарегистрироваться" className={style.btn_from_signup_form} />
                    </div>
                    <div className={style.links_to_kuda_to}>
                        <p className={style.again_password_text}>Забыли пароль?</p>
                        <p className={style.user_sogl}>Пользовательское соглашение</p>
                    </div>
                </form></Drawer>
        </>
    )
}
export default FormSignUp;