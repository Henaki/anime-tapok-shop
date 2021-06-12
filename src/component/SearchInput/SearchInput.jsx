import style from "./SearchInput.module.css";
import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const SearchInput = () => {
  let me_die = "/item/";
  const [stateSearch, setStateSearch] = useState([]);
  const [stateSearchTitle, setStateSearchTitle] = useState([]);
  useEffect(() => {
      const apiURL = 'http://at-shop/api/search/' + Cookies.get('item_slag')
      axios.get(apiURL).then((data)=> {
        console.log(data);
        const data_items = data.data.data.content;
        setStateSearch(data_items)
        setStateSearchTitle(data.data.data.message)
      }).catch((err) => {console.log(err);})
  }, [])
  return (
    <section>
      <div className={style.main_content_container}>
        <h1>{stateSearchTitle}</h1>
        <div className={style.main_catalog}>
          {stateSearch.map((item) => {
            return (
              <>
                <Link
                  data-aos="fade-up"
                  onClick={() => {Cookies.set('item_slag', item.slag)}}
                  to="/item"
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
