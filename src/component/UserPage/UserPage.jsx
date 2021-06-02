import React, { useState } from 'react';
import { message, Avatar } from 'antd';
import { UserOutlined, FormOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import style from './UserPage.module.css'

const UserPage = () => {
    return (
        <>
            <div className={style.userpage_border}>
                <p className={style.title_userpage}>Личный кабинет</p>
                <div className={style.userpage_content}>
                    <div className={style.navlink_menu_bar}>
                        <div className={style.navlink_active}>
                            <Link to="/user" className={style.navlink_active__style}>
                                <p>Настройки</p>
                            </Link>
                        </div>
                        <div className={style.navlink_non_active}>
                            <Link to="/basket" className={style.navlink_active__style}>
                                <p>Корзина</p>
                            </Link>
                        </div>
                    </div>
                    <div className={style.main_userpage_form}>
                        <div className={style.avatar__nickname}>
                            <Avatar size={163} icon={<UserOutlined />} />
                            <input type="text" name="nickname" placeholder="Никнейм" className={style.input_nickname_form_user} />
                        </div>
                        <div className={style.inform_on_user}>

                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Фамилия</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Фамилия" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Имя</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Имя" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Отчество</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Отчество" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Номер телефона</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Номер телефона" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>e-mail</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="e-mail" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Адрес доставки</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Адрес доставки" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Индекс</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Индекс" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Логин</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Логин" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Пароль</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Пароль" className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                        </div>
                        <div className={style.button_to_save}>
                            <input type="submit" name="saveInf" value="Сохранить изменения" className={style.button_to_save__style} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserPage;