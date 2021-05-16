import React, { useState } from 'react';
import style from './Reviews.module.css';
import { useForm } from "react-hook-form";
import state from '../../state';

const Reviwes = () => {
   
    let userName = '';
    let [userNameRole, setUserNameRole] = useState(3);
    if(userNameRole == 0) {
        userName = 'Гость';
    } else {
        state.users.map((user) => {
            if(user.id == userNameRole)
            return (
                userName = user.name
            )});
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));


    return (
        <section>
            <div className={style.main_block_reviwes}>
                <div className={style.block_input_comment}>
                <form className={style.input_comment} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.input_comment__name}>
                            <input ref={register} key={userNameRole} type="text" name="Name" value={userName} />
                        </div>
                        <div className={style.input_comment__text}>
                            <textarea ref={register} name="Review" placeholder="Введите отзыв"></textarea>
                        </div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style}></div>
                        <div className={style.buttons_input_comment}>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
                <div className={style.block_block_comment}>
                    {state.users.map((user)=> {
                    return (
                <div className={style.block_comment}>
                    <div className={style.comment__name}>
                    <p className={style.comment_nickname}>{user.name},</p>
                    <p className={style.comment_date}>{user.date_registration},</p>
                    <p className={style.comment_rank}>({user.rank})</p>
                    </div>
                    <div className={style.comment__text}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti omnis fuga, placeat voluptatibus odit beatae repellendus at pariatur, explicabo officia voluptates ullam ipsum, earum vitae non debitis praesentium nostrum.</p>
                    </div>
                </div>
                     );
                    }
                     )}
                </div>
            </div>
        </section>
    );
}
export default Reviwes;