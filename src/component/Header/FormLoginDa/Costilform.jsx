import React from 'react'
import { useForm } from "react-hook-form";
import style from './Costilform.module.css'

const Costilform = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

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