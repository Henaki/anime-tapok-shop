import React, { useReducer, useState, useEffect } from "react";
import style from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { cyeta } from "./../../state";
import state from "../../state";
import FormLogin from "./FormLogin/FormLogin";
import FormSignUp from "./FormSignUp/FormSignUp";
import axios from "axios";
import { message, Drawer } from "antd";
import "antd/dist/antd.css";
import Cookies from "js-cookie";

const Header = ({ setUser, user }) => {
  const [stateSearch, setStateSearch] = useState([]);
  let [stateSearchTitle, setStateSearchTitle] = useState("");
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  let userName = "";
  let [userNameRole, setUserNameRole] = useState(0);
  if (userNameRole == 0) {
    userName = "Гость";
  } else {
    state.users.map((user) => {
      if (user.id == userNameRole) return (userName = user.name);
    });
  }
  let [inputSearch, setInputSearch] = useState("");
  let [checked_btn, setChecked_btn] = useState(false);

  let history = useHistory();

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setChecked_btn((checked_btn = false));
    }
  });
  const handleSe = (e) => {
    const apiURL = "http://at-shop/api/search/" + inputSearch;
    axios.get(apiURL).then((data) => {
        const govno = data.data.data.message
        let govno3 = data.data.data.content
        console.log(govno3);
      Cookies.set("state_costil", govno);
      Cookies.set("state_costil2", govno3);
      history.push("/search");
    });
  };
  return (
    <section>
      <div className={style.header_main}>
        <div className={style.header_content}>
          <div className="">
            <label for="bok__menu" className={style.style_bok_menu}>
              <img
                className={style.style_bok_menu_img}
                src="icon_filter.png"
                alt=""
                width="50px"
                height="50px"
              />
              <img
                className={style.style_bok_menu_img_costil}
                src="icon_filter_costil.png"
                alt=""
                width="50px"
                height="50px"
              />
            </label>
            <input
              type="checkbox"
              id="bok__menu"
              className={style.bok_menu_btn}
              onClick={showDrawer}
            />
            <Drawer
              width="300px"
              title="Меню"
              placement="left"
              closable={true}
              onClose={onClose}
              visible={visible}
            >
              <ul className={style.list_to_links}>
                <div className={style.link_point_menu}>
                  <Link to="/" className={style.navlink_menu}>
                    <li>Главная</li>
                  </Link>
                </div>
                <div className={style.link_point_menu}>
                  <Link className={style.navlink_menu} to="/user">
                    <li>Личный кабинет</li>
                  </Link>
                </div>
                <div className={style.link_point_menu}>
                  <Link className={style.navlink_menu} to="/shop">
                    <li>Каталог</li>
                  </Link>
                </div>
                <div className={style.link_point_menu}>
                  <Link className={style.navlink_menu} to="/reviews">
                    <li>Отзывы</li>
                  </Link>
                </div>
                <div className={style.link_point_menu}>
                  <Link className={style.navlink_menu} to="/pagination">
                    <li>FAQ</li>
                  </Link>
                </div>
                <div className={style.link_point_menu}>
                  <Link className={style.navlink_menu} to="/pagination">
                    <li>Пользовательское соглашение</li>
                  </Link>
                </div>
              </ul>
            </Drawer>
          </div>
          <Link to="/">
            <a>
              <img src="logo.png" />
            </a>
          </Link>
          <div className={style.search_window_in_header}>
            <input
              type="text"
              className={style.search_input}
              onInput={(e) => setInputSearch(e.target.value)}
              name="search"
              placeholder="search for...
                        "
            />
            <label
              onClick={handleSe}
              className={style.search_button_label}
              for="search_button"
            >
              <img
                src="loupe.png"
                className={style.search_button_label_costil}
                width="30px"
                height="30px"
              />
              <input
                type="submit"
                className={style.search_button}
                name="search_button"
                value=""
              />
            </label>
          </div>
          <div className={style.inputs_sign_login}>
            <FormSignUp />
            <FormLogin />
            <div className={style.input_nickname}>
              <Link to="/user">
                <p className={style.input_nickname__text}>
                  {Cookies.get("login")}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
