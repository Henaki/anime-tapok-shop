import style from "./SearchInput.module.css";
import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const SearchInput = () => {
  let me_die = "/item/";
  const [stateSearch, setStateSearch] = useState(Cookies.get('state_costil')); // вернуть все прежде
  const [qwe, setQwe] = useState([])
  let stateSearchGovno = Cookies.get("state_costil2");
  console.log(stateSearchGovno);
    setQwe(stateSearchGovno)
  return (
    <section>
      <div className={style.main_content_container}>
        <h1>{Cookies.get('state_costil')} </h1>
        <div className={style.main_catalog}>
          {qwe.map((item) => {
            return (
              <>
                <Link
                  data-aos="fade-up"
                  to={me_die + item.slag}
                  className={style.main_catalog__tovar}
                >
                  <img src={item.photo} width="200px" height="100px" />
                  <h3>{item.name}</h3>
                  <p>{item.price}₽</p>
                  <input
                    type="submit"
                    value="В корзину"
                    onClick={() => {
                      const data = {
                        slag: item.slag,
                        count: 1,
                      };
                      axios
                        .post("http://at-shop/api/basket", data, {
                          headers: {
                            Authorization:
                              "Bearer " + Cookies.get("jwt_token_debil"),
                            "X-Requested-With": "XMLHttpRequest",
                          },
                        })
                        .then((data) => {
                          console.log(data);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                    className={style.button_from_buy}
                  />
                  <input
                    type="submit"
                    value="Заказать"
                    className={style.button_from_bought}
                  />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SearchInput;
