import { message } from "antd";
import "antd/dist/antd.css"
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import style from "./ItemPage.module.css";

const ItemPage = () => {

  const [codeSizeTag, setCodeSizeTag] = useState(<> </>)
  let [statePr, setStatePr] = useState('')
  const [stateBasket, setStateBasket] = useState();
  let [dataItem, setDataItem] = useState([])
  let [countNumb, setCountNumb] = useState(1);
  let size_basket;
  let count = 1;

  useEffect(() => {
    const urlAPI = 'http://at-shop/api/shop/' + Cookies.get('item_slag')
    axios.get(urlAPI).then((data) => {
      const data_item = data.data.data.content;
      setDataItem(dataItem = data_item)
      console.log(data);
    })
  }, [])

  return (
    <section>
      <div className={style.itempage_border}>
        {dataItem.map((item) => {
          return (
            <>
              <div className={style.inform_to_item_page}>
                <div className={style.img_and_inf_item}>
                  <img src={item.photo} alt="" className={style.style_img_item} />
                  <p className={style.inf_item_title}>Описание</p>
                  <p className={style.inf_item_words}>
                    {item.description}
                  </p>
                </div>
                <div className={style.inform_to_item_aside}>
                  <div className={style.title_item}>
                    <p>{item.name}</p>
                  </div>
                  <div className={style.price_item}>
                    <p>{item.price}Р</p>
                  </div>
                  <div className={style.category_item}>
                    <label htmlFor="">Категория</label>
                    <p>{item.category}</p>
                  </div>
                  <div className={style.weight_item}>
                    <label htmlFor="">Вес</label>
                    <p>{item.weight} гр.</p>
                  </div>
                  <div className={style.param_to_item_size}>
                    <p>Размер</p>
                    <div className={style.sizes_to_item}>
                      {item.size != null ? item.size.map((el) => {
                        return (
                          <div className={style.form_radio}>
                            <input id={el.size_id} type="radio" name="radio" />
                            <label for={el.size_id} onClick={() => {size_basket = el.size_name; console.log(size_basket);}}>{el.size_name}</label>
                          </div>
                        )
                      }) : <p className={style.size_field__text}>Без размеров</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.field_bottom_item}>
                <div className={style.field_bottom_bottom_item}></div>
                <div className={style.count_tovara}>
                  <input
                    type="submit"
                    className={style.button_reg_count}
                    value="—"
                    onClick={(e) => {
                      if (countNumb > 1) {
                        setCountNumb((countNumb -= 1));
                      }
                    }}
                  />
                  <p className={style.count__text}>{countNumb}</p>
                  <input
                    type="submit"
                    className={style.button_reg_count}
                    value="➕"
                    onClick={(e) => {
                      setCountNumb((countNumb += 1));
                    }}
                  />
                </div>
                <div className={style.btn_to_basket}>
                  <input
                    type="submit"
                    value="В корзину"
                    className={style.button_from_buy}
                    onClick={() => {
                      const data = {
                        slag: item.slag,
                        count: countNumb,
                        size: size_basket
                      };
                      axios
                        .post("http://at-shop/api/basket", data, {
                          headers: {
                            Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                            "X-Requested-With": "XMLHttpRequest",
                          },
                        })
                        .then((data) => {
                          console.log(data);
                          message.success("Товар добавлен в корзину")
                        })
                        .catch((error) => {
                          message.error("Что-то не так")
                          console.log(error);
                        });
                    }}
                  />
                </div>
              </div>
            </>
          )
        })}

      </div>
    </section>
  );
};
export default ItemPage;
