import React from 'react';
import style from './ShopPage.module.css';

const ShopPage = () => {
    return (
        <section>
            <div className={style.catalog_shop}>
                <h2>Каталог емае</h2>
                <div className={style.filter_btn_click}>
                <label for="filter" className={style.icon_filter_style_costil} > <img className={style.icon_filter_style} src="icon_filter.png"/>
                <input type="button" name="filter" className={style.button_filter}/>
                </label>
                <label className={style.filter_btn__text}>Фильтр</label>
                </div>
            <div className={style.shop_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.shop_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.shop_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.shop_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.shop_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <ul className={style.list_to_pages}>
                        <img src="strelka_in_list_shop.jpg"/>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>2212</li>
                        <img src="strelka_in_list_shop.jpg" className={style.strelka_in_shop_page_costil}/>
                    </ul>
            </div>
        </section>
    );
}
export default ShopPage;