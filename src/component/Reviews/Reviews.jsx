import React, { useState } from "react";
import style from "./Reviews.module.css";
import { useForm } from "react-hook-form";
import state from "../../state";
import Cookies from "js-cookie";

const Reviwes = () => {
  let userName = Cookies.get("login");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => (data);

  return (
    <section>
      <div className={style.main_block_reviwes}>
        <div className={style.content_reviews}>
          <div className={style.title_reviews_block_input}><p> Написать отзыв</p></div>
          <div className={style.block_input_comment}>
            <form
              className={style.input_comment}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={style.input_comment__name}>
                <p className={style.govno}>
                  {userName == undefined
                    ? (userName = "Гость")
                    : (userName = Cookies.get("login"))}
                </p>
              </div>
              <div className={style.input_comment__text}>
                <textarea
                  ref={register}
                  name="Review"
                  placeholder="Введите отзыв"
                ></textarea>
              </div>
              <div className={style.buttons_input_comment}>
                <input type="submit" />
              </div>
            </form>
          </div>
          <div className={style.title_reviews_block_input}>Отзывы</div>
          <div className={style.block_block_comment}>
            {state.users.map((user) => {
              if (user.name == "Гость") {
                return (
                  <div className={style.block_comment}>
                    <div className={style.comment__name}>
                      <p className={style.comment_nickname}>{user.name}</p>
                    </div>
                    <div className={style.comment__text}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit deleniti omnis fuga, placeat voluptatibus odit
                        beatae repellendus at pariatur, explicabo officia
                        voluptates ullam ipsum, earum vitae non debitis
                        praesentium nostrum.
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className={style.block_comment}>
                    <div className={style.comment__name}>
                      <p className={style.comment_nickname}>{user.name},</p>
                      <p className={style.comment_date}>
                        {user.date_registration},
                      </p>
                      <p className={style.comment_rank}>({user.rank})</p>
                    </div>
                    <div className={style.comment__text}>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit deleniti omnis fuga, placeat voluptatibus odit
                        beatae repellendus at pariatur, explicabo officia
                        voluptates ullam ipsum, earum vitae non debitis
                        praesentium nostrum.
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviwes;
