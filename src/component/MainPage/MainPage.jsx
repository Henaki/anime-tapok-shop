import React, { useEffect, useState } from "react";
import style from "./MainPage.module.css";
import SimpleSlider from "../Slider/Slider";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookies, { set } from "js-cookie";
import { message } from "antd";

const MainPage = () => {
  let [urlItem, setUrlItem] = useState("/item/");
  let [idItem, setIdItem] = useState(0);
  const [appStateItems, setAppStateItems] = useState([]);
  const [appStateItemsSlag, setAppStateItemsSlag] = useState({});
  const [appStateItemsSize, setAppStateItemsSize] = useState([]);
  const let_me_die = Cookies.get("jwt_token_debil");

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  useEffect(() => {
    const urlAPI = "http://at-shop/api/randomshop";
    axios.get(urlAPI).then((data) => {
      console.log(data.data.data.content);
      setAppStateItems(data.data.data.content);
      console.log(let_me_die);
    });
  }, []);


  return (
    <section className={style.background}>
      
      <div className={style.main_content_container}>
        <div className={style.main_slider}>
          <SimpleSlider />
        </div>
        
        <div className={style.main_catalog}>
          {appStateItems.slice(0, 5).map((item) => {
            return (
              <Link
                data-aos="fade-up"
                className={style.main_catalog__tovar}
                onClick={() => {Cookies.set('item_slag', item.slag)}}
                to="/item"
              >
                <img src={item.photo} width="200px" height="100px" />
                <h3>{item.name}</h3>
                <p>{item.price}₽</p>
                <input
                  type="button"
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
              </Link>
            );
          })}
        </div>
        <Link to="/shop">
          <input
            type="submit"
            value="Перейти в каталог"
            className={style.button_from_catalog}
          />
        </Link>
      </div>
      
    </section>
  );
};

export default MainPage;
