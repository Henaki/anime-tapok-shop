import React, { useState } from 'react';
import style from './FormPaymentYandex.module.css';

const FormPaymentCard = () => {
    let [NumberVallet, setNumberVallet] = useState('');

    return (
        <>
        <p className={style.title_payment}>Yandex.Деньги</p>
            <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberVallet(e.target.value)} value={NumberVallet} placeholder="Номер кошелька" />
            <div className=""></div>
        </>
    )
}
export default FormPaymentCard;