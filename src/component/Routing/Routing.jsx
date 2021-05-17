import React, { useState, useEffect, useContext } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import ItemPage from '../ItemPage/ItemPage';
import MainPage from '../MainPage/MainPage';
import NotFound from '../NotFound/NotFound';
import Reviwes from '../Reviews/Reviews';
import SearchInput from '../SearchInput/SearchInput';
import ShopPage from '../ShopPage/ShopPage';
import state from './../../state';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollUpButton from "react-scroll-up-button";
import AllProjects from '../PaginationProb/PaginationProb'


const Routing = () => {
    return (
        <>
        <Header />
        <Switch>
        <Route path="/pagination" component={AllProjects} />
            <Route exact path="/" component={MainPage} />
            <Route path="/reviews" component={Reviwes} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/item" component={ItemPage} />
            <Route path="/search" >
                <SearchInput />
            </Route>
            <Route component={NotFound} />

            

        </Switch>
        <ScrollUpButton 
        StopPosition={0}
        ShowAtPosition={250}
        EasingType='easeInOutCubic'
        AnimationDuration={600}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{outline: 'none',
        border: 'none',
        backgroundColor: 'rgba(46, 84, 99, 0.7)',
        opacity: '0.5',
        color: '#ffffff'
    }}
        ToggledStyle={{}}
        />
        <Footer />
        </>
    );
}
export default Routing;