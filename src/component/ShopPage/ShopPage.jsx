import React, { useEffect, useState } from 'react';
import style from './ShopPage.module.css';
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Aos from 'aos'
import 'aos/dist/aos.css'
import state from '../../state'

const ShopPage = () => {

    let [appState, setAppState] = useState([]);
    let [appState2, setAppState2] = useState([]);



    let [checkFilter, setCheckFilter] = useState(false);
    let [checkFilter2, setCheckFilter2] = useState(false);

    const checkedFunc = () => {
        if (checkFilter) {
            setCheckFilter(checkFilter = false);
            setAppState([])
        } else {
            setCheckFilter(checkFilter = true);
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            axios.get(apiUrl).then((res) => {
                console.log(res)
                const allPersons = res.data;
                setAppState(allPersons);
            });
        }
    }

    const checkedFunc2 = () => {
        if (checkFilter2) {
            setCheckFilter2(checkFilter2 = false);
            setAppState2([])
        } else {
            setCheckFilter2(checkFilter2 = true);
            const apiUrl2 = 'https://jsonplaceholder.typicode.com/users';
            axios.get(apiUrl2).then((res) => {
                console.log(res)
                const allPersons = res.data;
                setAppState2(allPersons);
            });
        }
    }

    useEffect(() => {
        Aos.init({ duration: 350 })
    }, []);
    return (
        <section>
            <div className={style.catalog_shop}>
                <h2 className={style.title_shop_page}>Каталог емае</h2>
                <div className={style.filter_btn_click}>
                    <label for="filter" className={style.icon_filter_style_costil} > <img className={style.icon_filter_style} src="icon_filter.png" />
                        <input type="checkbox" name="filter" className={style.button_filter} />
                    </label>
                    <label className={style.filter_btn__text}>Фильтр</label>
                </div>
                <div className={style.filter_menu}>
                    <div className={style.one_point_filter}>
                        <input type="checkbox" id="zati4ka1" className={style.checkbox_filter_none} onClick={checkedFunc} checked={checkFilter} />
                        <label for="zati4ka1" className={style.checkbox_btn__filter}>затычка</label>
                    </div>
                    <div className={style.one_point_filter}>
                        <input type="checkbox" id="zati4ka2" className={style.checkbox_filter_none} onClick={checkedFunc2} checked={checkFilter2} />
                        <label for="zati4ka2" className={style.checkbox_btn__filter}>perezati4ka</label>
                    </div>
                </div>
                <div className={style.catalog_shop_border}>
                    {
                        appState.map((init) => {
                            return (
                                <>
                                    <p>{init.id}</p>
                                </>
                            );
                        })
                    }
                    {
                        appState2.map((init) => {
                            return (
                                <>
                                    <p>{init.username}</p>
                                </>
                            );
                        })
                    }
                    {
                        state.items_shop.map((item) => {
                            return (
                                <div data-aos="fade-up" className={style.shop_catalog__tovar}>
                                    <img src={item.url} width="250px" height="100px" />
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                    <Link to="/item">
                                        <input type="submit" value="Купить" className={style.button_from_buy} />
                                    </Link>
                                </div>
                            );

                        })}

                </div>
                <div className={style.pagination_border}>

                </div>
            </div>
        </section>
    );
}
export default ShopPage;