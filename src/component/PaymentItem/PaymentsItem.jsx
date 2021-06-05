import React from "react";
import style from "./PaymentsItem.module.css";
import axios from "axios";
import { message, Input, Button } from "antd";
import "antd/dist/antd.css";
import Cookies from "js-cookie";

const PaymentsItem = () => {
  return (
    <>
      <div className={style.paymentsitem_border}>
        <div className={style.title_payments_item}>
          <p>Оплата товара</p>
        </div>
        <div className={style.radio_select_payment}>
          <p className={style.title_select_payment}>Выберите способ оплаты</p>
          <div className={style.border_select_radio}>
            <label for="card">
              <input type="radio" id="card" name="govmo"  className={style.radio_btn} />
              <div className={style.radio_btn_style}></div>
            </label>
            <label for="card">Банковская карта</label>
          </div>
          <div className={style.border_select_radio}>
            <label for="qiwi">
              <input type="radio" id="qiwi" name="govmo"  className={style.radio_btn} />
              <div className={style.radio_btn_style}></div>
            </label>
            <label for="qiwi">Qiwi</label>
          </div>
          <div className={style.border_select_radio}>
            <label for="paypal">
              <input type="radio" id="paypal" name="govmo"  className={style.radio_btn} />
              <div className={style.radio_btn_style}></div>
            </label>
            <label for="paypal">PayPal</label>
          </div>
          <div className={style.border_select_radio}>
            <label for="yandex">
              <input type="radio" id="yandex" name="govmo" className={style.radio_btn} />
              <div className={style.radio_btn_style}></div>
            </label>
            <label for="yandex">Yandex.money</label>
          </div>
        </div>
        <div className={style.data_for_payment}>
            <Input placeholder="номер"/>
            <Input placeholder="email"/>
            <Input placeholder="promocode))"/>
            <Button>Оплатить</Button>
        </div>
      </div>
    </>
  );
};

export default PaymentsItem;
