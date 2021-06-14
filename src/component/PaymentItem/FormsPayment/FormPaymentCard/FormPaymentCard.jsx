import React, { useState } from 'react';
import style from './FormPaymentCard.module.css';

const FormPaymentCard = () => {
    let [NumberCard, setNumberCard] = useState('');
    let [NumberCardCVS, setNumberCardCVS] = useState('');
    let [NumberCardMounth, setNumberCardMounth] = useState('')
    let [NumberCardYear, setNumberCardYear] = useState('')
    return (
        <>
            <p className={style.title_payment}>Банковская карта</p>
            <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberCard(e.target.value)} value={NumberCard} placeholder="Номер карты" />
            <div className={style.form_to_bottom_da}>
                <div className={style.form_card_mounth_year}>
                    <input className={style.input_data_to_pay_small} type="text" onInput={(e) => setNumberCardMounth(e.target.value)} value={NumberCardMounth} placeholder="Месяц" />
                    <p className={style.slash}>/</p>
                    <input className={style.input_data_to_pay_small} type="text" onInput={(e) => setNumberCardYear(e.target.value)} value={NumberCardYear} placeholder="Год" />
                </div>
                <input className={style.input_data_to_pay_small} type="text" onInput={(e) => setNumberCardCVS(e.target.value)} value={NumberCardCVS} placeholder="CVS код" />
            </div>
        </>
    )
}
export default FormPaymentCard;