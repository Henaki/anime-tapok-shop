import React, { useState } from "react";
import style from "./ItemPage.module.css";

const ItemPage = () => {
  const [stateBasket, setStateBasket] = useState();
  let [countNumb, setCountNumb] = useState(1);
  let [size, setSize] = useState(false);
  let price = 0;
  let count = 0;
  return (
    <section>
      <div className={style.itempage_border}>
        <div className={style.inform_to_item_page}>
          <div className={style.img_and_inf_item}>
            <img src="" alt="" className={style.style_img_item} />
            <p className={style.inf_item_title}>Описание</p>
            <p className={style.inf_item_words}>
              Копия тетради смерти из аниме “Deathnote”
            </p>
          </div>
          <div className={style.inform_to_item_aside}>
            <div className={style.title_item}>
              <p>Тетрадь смерти</p>
            </div>
            <div className={style.price_item} onClick={() => console.log(size)}>
              <p>500Р</p>
            </div>
            <div className={style.param_to_item}>
              <label htmlFor="">Категория</label>
              <p>Канцелярия</p>
            </div>
            <div className={style.param_to_item}>
              <label htmlFor="">Вес</label>
              <p>200 гр.</p>
            </div>
            <div className={style.param_to_item_size}>
              <p>Размер</p>
              <div className={style.sizes_to_item}>
                <div className={style.form_radio}>
                  <input id="S" type="radio" name="radio" />
                  <label for="S" onClick={() => {
                    setSize(true);
                  }}>S</label>
                </div>

                <div className={style.form_radio}>
                  <input id="M" type="radio" name="radio" />
                  <label for="M">M</label>
                </div>

                <div className={style.form_radio}>
                  <input id="XL" type="radio" name="radio" />
                  <label for="XL">XL</label>
                </div>

                <div className={style.form_radio}>
                  <input id="XLL" type="radio" name="radio" />
                  <label for="XLL">XLL</label>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className={style.field_bottom_item}>
          <div className={style.field_bottom_bottom_item}></div>
          <div className={style.count_tovara}>
            <input
              type="submit"
              className={style.button_reg_count}
              value="—"
              onClick={(e) => {
                if (count > 1) {
                  count--;
                  setCountNumb((countNumb = count));
                }
              }}
            />
            <p className={style.count__text}>{count}</p>
            <input
              type="submit"
              className={style.button_reg_count}
              value="➕"
              onClick={(e) => {
                count++;
                setCountNumb((countNumb = count));
              }}
            />
          </div>
          <div className={style.btn_to_basket}>
            <input
              type="submit"
              value="В корзину"
              className={style.button_from_buy}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ItemPage;
