import React from "react";
import style from "./PaymentsItem.module.css";
import axios from "axios";
import { message, Input, Button } from "antd";
import "antd/dist/antd.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const PaymentsItem = () => {
  let history = useHistory();
  let [NumberCard, setNumberCard] = useState('');
  let [NumberCardCVS, setNumberCardCVS] = useState('');
  const CheckInput = () => {
    if(NumberCardCVS == "" || NumberCard == "") {
        message.error("Заполните поля")
    } else {
      axios.delete('http://at-shop/api/basket', {
        headers: {
          Authorization: "Bearer " +  Cookies.get('jwt_token_debil'),
          "X-Requested-With": "XMLHttpRequest",
        },
      }).then((data) => {
          message.success('Идет переадресация на страницу оплаты')
          setTimeout(() => {history.push("/basket")}, 2000)
      }).catch((err) => console.log(err))
    }
  }
  
  return (
    <>
      <div className={style.paymentsitem_border}>
        <div className={style.payments_item_border}>
          <div className={style.title_payments_item}>
            <p>Оплата товара</p>
          </div>
          <div className={style.payment_pay_border}>
            <div className={style.radio_select_payment}>
              <p className={style.title_select_payment}>Выберите способ оплаты:</p>
              <div className={style.border_radio_select_payment}>
                <div className={style.border_select_radio}>
                  <label for="card">
                    <input type="radio" id="card" name="govmo" defaultChecked className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="card">Банковская карта</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="qiwi">
                    <input type="radio" id="qiwi" name="govmo" className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="qiwi">Qiwi</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="paypal">
                    <input type="radio" id="paypal" name="govmo" className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="paypal">PayPal</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="yandex">
                    <input type="radio" id="yandex" name="govmo" className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="yandex">Yandex.money</label>
                </div>
              </div>
            </div>
            <div className={style.data_for_payment}>
              <p className={style.title_data_to_pay}>Данные об оплате</p>
              <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberCard(e.target.value)} value={NumberCard} placeholder="Номер карты" />
              <input className={style.input_data_to_pay} type="text" onInput={(e) => setNumberCardCVS(e.target.value)} value={NumberCardCVS} placeholder="CVS код" />
            </div>
          </div>
            <input
              type="submit"
              value="Перейти к оплате"
              className={style.btn_for_zakaz}
              onClick={CheckInput}
            />
        </div>
      </div>
    </>
  );
};

export default PaymentsItem;
