import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import style from './Costilform.module.css'
import axios from 'axios';

const Costilform = ({setUser, user}) => {
    const [userName, setUserName] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const urlAPI = "http://at-shop/api/login";
        axios.post(urlAPI, data).then((data) => {
            console.log(data.data.body.message)
            console.log(data)
            setUser(user = data.data.body.user)
            console.log(userName)
        });
        
    };

    return (
        <form className={style.form_style_login} onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <label for="email">Почта</label>
                <input ref={register} type="email" name="email" className={style.input_in_login} />
            </div>
            <div className="">
                <label for="password">Пароль</label>
                <input ref={register} type="password" name="password" className={style.input_in_login} />
            </div>
            <input type="submit" value="Авторизоваться" className={style.btn_from_login_form} />
        </form>
    )
}
export default Costilform;