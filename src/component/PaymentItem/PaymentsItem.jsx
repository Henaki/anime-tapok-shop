import React from "react";
import style from "./PaymentsItem.module.css";
import axios from "axios";
import { message, Input, Button } from "antd";
import "antd/dist/antd.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormPaymentCard from "./FormsPayment/FormPaymentCard/FormPaymentCard";
import FormPaymentQiwi from "./FormsPayment/FormPaymentQiwi/FormPaymentQiwi"
import FormPaymentPayPal from "./FormsPayment/FormPaymentPayPal/FormPaymentPayPal";
import FormPaymentYandex from "./FormsPayment/FormPaymentYandex/FormPaymentYandex";

const PaymentsItem = () => {
  const [stateForm, setStateForm] = useState(<FormPaymentCard/>)

  let history = useHistory();
  const CheckInput = () => {

    axios.delete('http://at-shop/api/basket', {
      headers: {
        Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
        "X-Requested-With": "XMLHttpRequest",
      },
    }).then((data) => {
      message.success('Идет переадресация на страницу оплаты')
      setTimeout(() => { history.push("/basket") }, 2000)
    }).catch((err) => console.log(err))

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
                    <input type="radio" id="card" name="govmo" onChange={(e) => setStateForm(<FormPaymentCard/>)} defaultChecked className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="card">Банковская карта</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="qiwi">
                    <input type="radio" id="qiwi" name="govmo" onChange={(e) => setStateForm(<FormPaymentQiwi />)} className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="qiwi">Qiwi</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="paypal">
                    <input type="radio" id="paypal" name="govmo"  onChange={(e) => setStateForm(<FormPaymentPayPal/>)} className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="paypal">PayPal</label>
                </div>
                <div className={style.border_select_radio}>
                  <label for="yandex">
                    <input type="radio" id="yandex" name="govmo"  onChange={(e) => setStateForm(<FormPaymentYandex/>)} className={style.radio_btn} />
                    <div className={style.radio_btn_style}></div>
                  </label>
                  <label className={style.radio_btn__text} for="yandex">Yandex.money</label>
                </div>
              </div>
            </div>
            <div className={style.data_for_payment}>
              {stateForm}
              {/* {keyCard.checked ? <FormPaymentCard /> : keyQiwi.checked ? <FormPaymentQiwi /> : keyPayPal.checked ? <FormPaymentPayPal /> : keyYandex.checked ? <FormPaymentYandex /> : <FormPaymentCard />} */}
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
