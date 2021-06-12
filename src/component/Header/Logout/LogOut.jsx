import React, { useState } from 'react';
import style from './LogOut.module.css';
import { Modal, Space } from 'antd';
import 'antd/dist/antd.css'
import Cookies from 'js-cookie'


const { confirm } = Modal;


function showPromiseConfirm() {
  confirm({
    title: 'Вы действительно хотите выйти?',
    onOk() {
      return new Promise(() => {
        setTimeout(() => { Cookies.remove('jwt_token_debil'); Cookies.remove('login'); }, 1000);
        setTimeout(function() {window.location.reload()}, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
}

const LogOut = () => {
  return (
    <>
      <div className=""></div>
      <p className={style.button_logout_btn} onClick={showPromiseConfirm}>Выйти</p>

    </>
  )
}
export default LogOut