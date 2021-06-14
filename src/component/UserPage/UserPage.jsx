import React, { useState } from 'react';
import { message, Avatar } from 'antd';
import { UserOutlined, FormOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import style from './UserPage.module.css'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useEffect } from 'react';

const UserPage = () => {
    let [logine, setLogine] = useState('')
    let [firstName, setFirstName] = useState('')
    let [middleName, setMiddleName] = useState('')
    let [lastName, setLastName] = useState('')
    let [address, setAddress] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [indexHome, setIndexHome] = useState('')

    let [userDataUpdate, setUserDataUpdate] = useState({})
    let [userData, setUserData] = useState({})
    useEffect(() => {
        axios.get('http://at-shop/api/user', {
            headers: {
                Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                "X-Requested-With": "XMLHttpRequest",
            },
        }).then((data) => {
            const user_data = data.data.data.content;
            setUserData(userData = user_data);
            console.log(userData);
            setLogine(userData.login);
            setFirstName(userData.first_name);
            setMiddleName(userData.middle_name);
            setLastName(userData.last_name);
            setAddress(userData.address);
            setPhoneNumber(userData.phone_number)
            setIndexHome(userData.index);
        }).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div className={style.userpage_border}>
                <p className={style.title_userpage}>Личный кабинет</p>
                <div className={style.userpage_content}>
                    <div className={style.navlink_menu_bar}>
                        <div className={style.navlink_non_active}>
                            <Link to="/user" className={style.navlink_active__style}>
                                <p>Настройки</p>
                            </Link>
                        </div>
                        <div className={style.navlink_active}>
                            <Link to="/basket" className={style.navlink_active__style}>
                                <p>Корзина</p>
                            </Link>
                        </div>
                    </div>
                    <div className={style.main_userpage_form}>
                        <div className={style.avatar__nickname}>
                            <Avatar size={163} icon={<UserOutlined />} onClick={() => console.log(logine)} />
                            <input type="text" name="nickname" placeholder="Никнейм" onInput={(e) => { setLogine(e.target.value); }} value={logine} className={style.input_nickname_form_user} />
                        </div>
                        <div className={style.inform_on_user}>

                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Фамилия</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Фамилия" onInput={(e) => { setLastName(e.target.value); }} value={lastName} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Имя</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Имя" onInput={(e) => { setFirstName(e.target.value); }} value={firstName} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Отчество</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Отчество" onInput={(e) => { setMiddleName(e.target.value); }} value={middleName} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Номер телефона</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Номер телефона" onInput={(e) => { setPhoneNumber(e.target.value); }} value={phoneNumber} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>e-mail</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="e-mail" value={userData.email} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Адрес доставки</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Адрес доставки" onInput={(e) => { setAddress(e.target.value); }} value={address} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                            <div className={style.edit_input_inf}>
                                <div className={style.input_inf_in_filed}>
                                    <p>Индекс</p>
                                </div>
                                <div className={style.edit_input_inf_in_field}>
                                    <FormOutlined style={{ fontSize: '27px' }} />
                                    <input type="text" name="firstname" placeholder="Индекс" onInput={(e) => { setIndexHome(e.target.value); }} value={indexHome} className={style.input_inf_in_field__style} />
                                </div>
                            </div>
                        </div>
                        <div className={style.button_to_save}>
                            <input type="submit" name="saveInf" value="Сохранить изменения" className={style.button_to_save__style} onClick={() => {
                                setUserDataUpdate(userDataUpdate = {
                                    address: address,
                                    first_name: firstName,
                                    index: indexHome,
                                    last_name: lastName,
                                    login: logine,
                                    middle_name: middleName,
                                    phone_number: phoneNumber,
                                })
                                setTimeout(() => {
                                    console.log(userDataUpdate);
                                    axios.patch('http://at-shop/api/user', userDataUpdate, {
                                        headers: {
                                            Authorization: "Bearer " + Cookies.get('jwt_token_debil'),
                                            "X-Requested-With": "XMLHttpRequest",
                                        },
                                    }).then((data) => {
                                        console.log(data);
                                        message.success("Профиль обновлен")
                                    }).catch((err) => { console.log(err); message.error("Что-то пошло не так") })
                                }, 1000)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserPage;