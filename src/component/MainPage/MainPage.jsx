import React, { useEffect } from 'react';
import style from './MainPage.module.css';
import SimpleSlider from '../Slider/Slider';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Aos from 'aos'
import 'aos/dist/aos.css'
import state from '../../state';

const MainPage = () => {

    
    useEffect(() => {
        Aos.init({ duration: 400 })
    }, []);
    return (
        <section className={style.background}>
            <div className={style.main_content_container}>
                <div className={style.main_slider}>
                    <SimpleSlider />
                </div>
                <div className={style.main_catalog}>
                    {state.items_main.map((item) => {
                        return (
                            <div data-aos="fade-up" className={style.main_catalog__tovar}>
                                <img src={item.url} width="200px" height="100px" />
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <Link to="/item">
                                    <input type="submit" value="Купить" className={style.button_from_buy} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <Link data-aos="fade-up" to="/shop">
                    <input type="submit" value="Перейти в каталог" className={style.button_from_catalog} />
                </Link>
            </div>
        </section>
    );
}

export default MainPage;