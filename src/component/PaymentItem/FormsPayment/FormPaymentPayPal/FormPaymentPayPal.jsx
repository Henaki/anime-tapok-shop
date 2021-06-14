import React, { useState } from 'react';
import style from './FormPaymentPayPal.module.css';

const FormPaymentCard = () => {
    let [NumberPhonePP, setNumberPhonePP] = useState('');

    return (
        <>
        <p className={style.title_payment}>PayPal</p>
            <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberPhonePP(e.target.value)} value={NumberPhonePP} placeholder="Номер телефона" />
            <div className=""></div>
        </>
    )
}
export default FormPaymentCard;