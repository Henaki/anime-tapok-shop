import * as React from 'react';
import style from './Reviews.module.css';
import { useForm } from "react-hook-form";

    function Reviwes() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));
    return (
        <section>
            <div className={style.main_block_reviwes}>
                <div className={style.block_input_comment}>
                    <form className={style.input_comment} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.input_comment__name}>
                            <input ref={register} type="text" name="Name" value="Гость" placeholder="Введите имя"/>
                        </div>
                        <div className={style.input_comment__text}>
                            <textarea ref={register} value="Отзыв" name="Review" placeholder="Введите отзыв" required></textarea>
                        </div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style.buttons_input_comment}>
                            <input type="button" value="Стереть все"/>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
                <div className={style.block_block_comment}>
                <div className={style.block_comment}>
                    <div className={style.comment__name}>
                    <h3>OG.LYD1A</h3>
                    <p>20.03.2020</p>
                    <p>Гость</p>
                    <p></p>
                    </div>
                    <div className={style.comment__text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis aliquid accusantium saepe dolorum ab, dignissimos magnam adipisci excepturi aspernatur? Necessitatibus provident omnis quia quaerat assumenda reprehenderit, distinctio dolorum libero.</p>
                    </div>
                </div>
                <div className={style.block_comment}>
                    <div className={style.comment__name}>
                    <h3>OG.LYD1A</h3>
                    <p>20.03.2020</p>
                    <p>Нагибатор</p>
                    <p>ОлдFuG</p>
                    </div>
                    <div className={style.comment__text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis aliquid accusantium saepe dolorum ab, dignissimos magnam adipisci excepturi aspernatur? Necessitatibus provident omnis quia quaerat assumenda reprehenderit, distinctio dolorum libero.</p>
                    </div>
                </div>
                <div className={style.block_comment}>
                    <div className={style.comment__name}>
                    <h3>OG.LYD1A</h3>
                    <p>20.03.2020</p>
                    <p>Гость</p>
                    <p></p>
                    </div>
                    <div className={style.comment__text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis aliquid accusantium saepe dolorum ab, dignissimos magnam adipisci excepturi aspernatur? Necessitatibus provident omnis quia quaerat assumenda reprehenderit, distinctio dolorum libero.</p>
                    </div>
                </div>
                <div className={style.block_comment}>
                    <div className={style.comment__name}>
                    <h3>OG.LYD1A</h3>
                    <p>20.03.2020</p>
                    <p>Нагибатор</p>
                    <p>ОлдFuG</p>
                    </div>
                    <div className={style.comment__text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis aliquid accusantium saepe dolorum ab, dignissimos magnam adipisci excepturi aspernatur? Necessitatibus provident omnis quia quaerat assumenda reprehenderit, distinctio dolorum libero.</p>
                    </div>
                </div>
                </div>
                <a href="#top"><div className={style.anchor}>|||</div></a>
            </div>
        </section>
    );
}
export default Reviwes;