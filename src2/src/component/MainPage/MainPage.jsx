import React from 'react';
import style from './MainPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import ShopPage from '../ShopPage/ShopPage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const RouterSite = () => {
    return (
    <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path="/shop" component={ShopPage}/>
        <Route component={NotFound}/>
    </Switch>
    );
}

const MainPage = () => {
    return (
        <section>
            <div className={style.main_content_container}>
                <div className={style.main_slider}>

                </div>
                <div className={style.main_catalog}>
                    <div className={style.main_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.main_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.main_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.main_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <div className={style.main_catalog__tovar}>
                        <img src="logo.jpg" width="250px" height="100px"/>
                        <h3>Название товара</h3>
                        <p>28000₽</p>
                        <input type="submit" value="Купить" className={style.button_from_buy} />
                    </div>
                    <Link to="/shop">
                    <input type="submit" value="Перейти в каталог" className={style.button_from_catalog}/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default RouterSite;