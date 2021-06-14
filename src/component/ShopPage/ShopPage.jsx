import React, { useEffect, useState, useMemo } from "react";
import style from "./ShopPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";
import { Pagination, message } from "antd";
import "antd/dist/antd.css";

const ShopPage = () => {
  let [countItem, setCountItem] = useState(50);
  let pageNumberMain = 1;
  let [filterMas, setFilterMas] = useState([]);
  let [formStyle, setFormStyle] = useState({
    display: "none"
  });
  let [styleBtn, setStyleBtn] = useState({
    opacity: 1
  })
  let [boolCheckBtn, setBoolCheckBtn] = useState(false);
  const [appState, setAppState] = useState([]);
  let [appStateCategory, setAppStateCategory] = useState([]);

  useEffect(() => {
    const urlAPI = "http://at-shop/api/shop";
    axios.get(urlAPI).then((data) => {
      console.log(data.data.data.content);
      const allItems = data.data.data.content;
      setAppState(allItems);
      const Category = data.data.data.category;
      setAppStateCategory((appStateCategory = Category));
      console.log(appStateCategory);
    });
  }, []);

  const onChange = (pageNumber) => {
    pageNumberMain = pageNumber
    console.log(pageNumber);
    axios.get('http://at-shop/api/shop', {
      params: {
        filter: filterMas, page: pageNumberMain
      }
    }).then((data) => {
      console.log(data);
      const pagination_state = data.data.data.content;
      const count_item = data.data.data.count
      setCountItem(count_item)
      setAppState(pagination_state)
    }).catch((err) => { console.log(err); });
  };

  return (
    <section>
      <div className={style.catalog_shop}>
        <h2 className={style.title_shop_page}>Каталог емае</h2>
        <div className={style.filter_btn_click}>
          <input
            style={styleBtn}
            type="button"
            value="Фильтр"
            className={style.button_filter}
            onClick={() => {
              if (boolCheckBtn == false) {
                setFormStyle({
                  transition: "0.5s",
                  display: "flex"
                })
                setStyleBtn(styleBtn = {
                  transition: "0.5s",
                  opacity: "0",
                  cursor: "auto"
                })
                setBoolCheckBtn(boolCheckBtn = true)
              }
            }}
          />
        </div>
        <div className={style.filter_menu} style={formStyle}>
          <input type="button" value="X" className={style.btn_to_close} onClick={() => {
            if (boolCheckBtn == true) {
              setFormStyle({
                display: "none",
              })
              setStyleBtn(styleBtn = {
                transition: "0.5s",
                opacity: "1"
              })
              setBoolCheckBtn(boolCheckBtn = false);
            }
          }} />
          <div className={style.field_category_item} style={formStyle}>
            {appStateCategory.map((item) => {
              return (
                <div className={style.one_point_filter}>
                  <input
                    type="checkbox"
                    id={item.name}
                    className={style.checkbox_filter_none}
                    onClick={(e) => {
                      console.log(e.target.checked);
                      if (e.target.checked == true) {
                        filterMas.push(item.name)
                        console.log(filterMas);
                      }
                      else {
                        let ind = filterMas.indexOf(item.name)
                        console.log(ind);
                        filterMas.splice(ind, 1);
                        console.log(filterMas);
                      }
                    }}
                  />
                  <label
                    for={item.name}
                    className={style.checkbox_btn__filter}
                  >
                    {item.name}
                  </label>
                </div>
              );
            })}
          </div>
          <input type="button" value="Показать" className={style.btn_to_present} onClick={() => {
            if (boolCheckBtn == true) {
              setFormStyle({
                display: "none",
              })
              setStyleBtn(styleBtn = {
                transition: "0.5s",
                opacity: "1"
              })
              setBoolCheckBtn(boolCheckBtn = false);
            }
            axios.get('http://at-shop/api/shop', {
              params: {
                filter: filterMas
              }
            }).then((data) => {
              console.log(data);
              const data_categories = data.data.data.content
              const count_item = data.data.data.count
              setCountItem(count_item)
              setAppState(data_categories);
            }).catch((err) => { console.log(err); })
          }} />
        </div>
        <div className={style.catalog_shop_border}>
          {appState.map((item) => {
            return (
              <div>
                <div className={style.shop_catalog__tovar}>
                  <img src={item.photo} width="250px" height="100px" />
                  <Link className={style.titlename_tovar} onClick={() => { Cookies.set('item_slag', item.slag) }}
                    to="/item"><h3>{item.name}</h3></Link>
                  <p>{item.price}</p>
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
                            Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                            "X-Requested-With": "XMLHttpRequest",
                          },
                        })
                        .then((data) => {
                          console.log(data);
                          message.success("Товар добавлен в корзину")
                        })
                        .catch((error) => {
                          console.log(error);
                          message.error("Войдите, прежде чем добавлять в корзину")
                        });
                    }}
                    className={style.button_from_buy}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.pagination_border}>
          <Pagination defaultCurrent={1} total={countItem} onChange={onChange} style={{ marginTop: "20px" }} />
        </div>
      </div>
    </section>
  );
};
export default ShopPage;
