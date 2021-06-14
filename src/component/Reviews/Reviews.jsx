import React, { useState } from "react";
import style from "./Reviews.module.css";
import state from "../../state";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "antd/dist/antd.css"

const Reviwes = () => {
  let userName = Cookies.get("login");
  const [textInput, setTextInput] = useState('');
  const [reviewsState, setReviewsState] = useState([])
  useEffect(() => {
    axios.get("http://at-shop/api/feedback").then((data) => {
      console.log(data);
      const reviews = data.data.data.content;
      setReviewsState(reviews)
    }).catch((err) => console.log(err))
  }, [])
  return (
    <section>
      <div className={style.main_main_block_reviews}>
      <div className={style.main_block_reviwes}>
        <div className={style.content_reviews}>
          {userName != undefined ? <>
            <div className={style.title_reviews_block_input}><p className={style.title_field_reviews_input}> Написать отзыв</p>
              <div className={style.block_input_comment}>
                <form
                  className={style.input_comment}
                >
                  <div className={style.input_comment__name}>
                    <p className={style.govno}>
                      {userName}
                    </p>
                  </div>
                  <div className={style.input_comment__text}>
                    <textarea
                      type="text"
                      onInput={(e) => { setTextInput(e.target.value) }}

                      placeholder="Введите отзыв"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className={style.buttons_input_comment}>
                <input type="submit" value="Добавить отзыв" onClick={() => {
                  axios.post("http://at-shop/api/feedback", {text_feedback: textInput}, {
                    headers: {
                      Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                      "X-Requested-With": "XMLHttpRequest"
                    }
                  }).then((data)=> {
                      console.log(data);
                      message.success("Вы добавили отзыв")
                      setTimeout(window.location.reload(), 2000)
                  }).catch((err)=>console.log(err))
                }} />
              </div>
            </div>
          </> : <></>}
          <div className={style.title_reviews_block_output}><p className={style.title_field_reviews_output}> Отзывы</p>
            <div className={style.block_block_comment}>
              {reviewsState.map((user) => {
                return (
                  <div className={style.block_comment}>
                    <div className={style.comment__name}>
                      <p className={style.comment_nickname}>{user.user_login}</p>
                    </div>
                    <div className={style.comment__text}>
                      <p>
                        {user.text_feedback}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Reviwes;
