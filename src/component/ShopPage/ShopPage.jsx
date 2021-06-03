import React, { useEffect, useState, useMemo } from 'react';
import style from './ShopPage.module.css';
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import state from '../../state'

const ShopPage = () => {

    const [appState, setAppState] = useState([]);
    const [appStateBasket, setAppStateBasket] = useState({})
    let url_item = '/item/';

    useEffect(() => {
        const urlAPI = 'http://at-shop/api/shop';
        axios.get(urlAPI).then((data) => {
            console.log(data.data.data.content);
            const allItems = data.data.data.content;
            setAppState(allItems)
        })
    }, [])
    
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
                        <input type="checkbox" id="zati4ka1" className={style.checkbox_filter_none} />
                        <label for="zati4ka1" className={style.checkbox_btn__filter}>затычка</label>
                    </div>
                    <div className={style.one_point_filter}>
                        <input type="checkbox" id="zati4ka2" className={style.checkbox_filter_none} />
                        <label for="zati4ka2" className={style.checkbox_btn__filter}>perezati4ka</label>
                    </div>
                </div>
                <div className={style.catalog_shop_border}>
                    {
                        appState.map((item) => {
                            return (
                                <Link to={url_item + item.slag}>
                                    <div className={style.shop_catalog__tovar}>
                                        <img src={item.photo} width="250px" height="100px" />
                                        <h3>{item.name}</h3>
                                        <p>{item.price}</p>
                                        <input type="submit" value="В корзину"  onClick={()=> {
                                            setAppStateBasket({
                                                slag: item.slag,
                                                count: 1,
                                            })
                                            axios.post('http://at-shop/api/basket', appStateBasket).then((data) => {
                                                console.log(data.data.data.message);
                                            })
                                        }} className={style.button_from_buy} />
                                        <input type="submit" value="Заказать" className={style.button_from_bought}/>
                                    </div>
                                </Link>
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