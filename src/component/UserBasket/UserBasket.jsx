import React, { useState, useEffect } from "react";
import style from "./UserBasket.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { message } from 'antd';
import 'antd/dist/antd.css';

const UserBasket = () => {
  const data_delete = []
  const [stateBasket, setStateBasket] = useState([]);
  let [countNumb, setCountNumb] = useState(1);
  let price = 0;
  useEffect(() => {
    axios
      .get("http://at-shop/api/basket", {
        headers: {
          Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((data) => {
        console.log(data);
        setStateBasket(data.data.data.content)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className={style.userbasket_border}>
        <p className={style.title_userbasket}>Корзина</p>
        <div className={style.items_basket_and_nav}>
          <div className={style.field_nav}>
            <div className={style.navlink_menu_bar}>
              <div className={style.navlink_active}>
                <Link to="/user" className={style.navlink_active__style}>
                  <p>Настройки</p>
                </Link>
              </div>
              <div className={style.navlink_non_active}>
                <Link to="/basket" className={style.navlink_active__style}>
                  <p>Корзина</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.items_basket}>
            {stateBasket.map((item) => {
              price += item.price * item.count;
              return (
                <div className={style.row_basket__tovars}>
                  <input
                    type="checkbox"
                    className={style.checkbox_basket}
                    id={item.id}
                    onChange={() => data_delete.push(item.id)}
                  />
                  <label for={item.id} className={style.checkbox_basket__label}>
                    <img src="./galochka.jpg" width="35px" height="35px" />
                  </label>
                  <div className={style.basket__tovars}>
                    <img src={item.photo} width="250px" height="100px" />
                    <h3>{item.name}</h3>
                    <div className={style.count_tovara}>
                      <input
                        type="submit"
                        className={style.button_reg_count}
                        value="—"
                        onClick={(e) => {
                          if (item.count > 1) {
                            item.count--;
                            setCountNumb((countNumb = item.count));
                          }
                        }}
                      />
                      <p className={style.count__text}>{item.count}</p>
                      <input
                        type="submit"
                        className={style.button_reg_count}
                        value="➕"
                        onClick={(e) => {
                          item.count++;
                          setCountNumb((countNumb = item.count));
                        }}
                      />
                    </div>
                    <p
                      onClick={() => {
                        console.log(countNumb);
                      }}
                    >
                      {item.price}₽
                    </p>
                  </div>
                </div>
              );
            })}
            <div className={style.field_to_zakaz_and_price}>
              <div className=""></div>
              <div className={style.window_price_and_btn}>
                <p className={style.all_price__text}>Общая цена: {price} ₽</p>
                <input
                  type="submit"
                  value="Удалить"
                  className={style.button_from_delete_item}
                  onClick={() => {
                    console.log(Cookies.get('jwt_token_debil'));
                    axios.delete('http://at-shop/api/basket',
                      {
                        data: data_delete,
                        headers: {
                          Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                          "X-Requested-With": "XMLHttpRequest"
                        }
                      }).then((data) => {
                        message.success('Товары успешно удалены')
                        setTimeout(() => { window.location.reload() }, 2000)
                      }).catch((err) => { debugger; console.log(err); })
                  }}
                />
                <Link to="/pay">
                  <input
                    type="submit"
                    value="Заказать"
                    className={style.btn_for_zakaz}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserBasket;
