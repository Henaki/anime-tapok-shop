import style from './SearchInput.module.css';
import state from './../../state';
import React, { useState, useEffect, useContext, useReducer } from 'react';
import {cyeta, text} from '../../state';

const SearchInput = () => {
    // TODO: ЕБАНУТЬ РЕДАКС В ПРОЕКТ
    let [textSearch, setTextSearch] = useReducer(cyeta, text)


    return (
        <section>
            <h1>По запросу {textSearch} найдено: {2} товара </h1>
        </section>
    );
}
export default SearchInput