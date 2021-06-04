import React, { useState } from "react";
import style from "./ItemPage.module.css";

const ItemPage = () => {
  const [stateBasket, setStateBasket] = useState();
  let [countNumb, setCountNumb] = useState(1);
  let price = 0;
  let count = 0;
  return (
    <section>
      <div className={style.itempage_border}>
        <div className={style.inform_to_item_page}>
          <div className={style.img_and_inf_item}>
            <img
              src="./photos/death_note.jpg"
              alt=""
              className={style.style_img_item}
            />
            <p className={style.inf_item_title}>Описание</p>
            <p className={style.inf_item_words}>
              Копия тетради смерти из аниме “Deathnote”
            </p>
          </div>
          <div className={style.inform_to_item_aside}>
            <div className={style.title_item}>
              <p>Тетрадь смерти</p>
            </div>
            <div className={style.price_item}>
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
                <label for="S">S</label>
                <input type="checkbox" id="S" />
                <label for="M">M</label>
                <input type="checkbox" id="M" />
                <label for="XL">XL</label>
                <input type="checkbox" id="XL" />
                <label for="XXL">XXL</label>
                <input type="checkbox" id="XXL" />
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
