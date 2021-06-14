import React, { useState } from 'react';
import style from './FormPaymentQiwi.module.css';

const FormPaymentCard = () => {
    let [NumberPhone, setNumberPhone] = useState('')
    return (
        <>
            <p className={style.title_payment}>Qiwi</p>
            <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberPhone(e.target.value)} value={NumberPhone} placeholder="Номер телефона" />
            <div className=""></div>
        </>
    )
}
export default FormPaymentCard;