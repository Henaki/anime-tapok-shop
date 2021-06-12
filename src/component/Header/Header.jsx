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
import LogOut from "./Logout/LogOut";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  let link = "";
  let login_guest = Cookies.get("login");
  let [formLogSign, setFormLogSign] = useState(
    <>
      <FormLogin /> <FormSignUp />
    </>
  );
  if (login_guest != undefined) {
    link = "/user";
  }
  const [stateSearch, setStateSearch] = useState([]);
  let [stateSearchTitle, setStateSearchTitle] = useState("");
  const [visible, setVisible] = useState(false);
  let userName = "";
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  let [inputSearch, setInputSearch] = useState("");
  let [checked_btn, setChecked_btn] = useState(false);

  let history = useHistory();

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setChecked_btn((checked_btn = false));
    }
  });
  return (
    <section>
      <div className={style.header_main}>
        <div className={style.header_content}>
          <div className="">
            <label for="bok__menu" className={style.style_bok_menu}>
              <svg className={style.burger_menu} viewBox="0 0 100 75" width="50" height="50">
                <rect className={style.burger_menu_item} x="20" y="15" width="60" height="6"></rect>
                <rect className={style.burger_menu_item} x="20" y="35" width="60" height="6"></rect>
                <rect className={style.burger_menu_item} x="20" y="55" width="60" height="6"></rect>
              </svg>
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
                  <Link
                    className={style.navlink_menu}
                    to={link}
                    onClick={() => {
                      if (login_guest == "Гость") {
                        message.info(
                          "Зарегистрируйтесь, прежде чем сюда тыкать"
                        );
                      }
                    }}
                  >
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
              onInput={(e) => {
                setInputSearch(e.target.value);
              }}
              name="search"
              placeholder="search for...
                        "
            />
            <label
              onClick={() => {
                Cookies.set("item_slag", inputSearch);
                history.push("/search");
              }}
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
            {login_guest != undefined ? <LogOut /> : formLogSign}
            <div className={style.input_nickname}>
              <Link
                to={link}
                onClick={() => {
                  if (login_guest == "Гость") {
                    message.info("Зарегистрируйтесь, прежде чем сюда тыкать");
                  }
                }}
              >
                <p className={style.input_nickname__text}>
                  {login_guest == undefined
                    ? (login_guest = "Гость")
                    : (login_guest = Cookies.get("login"))}
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
