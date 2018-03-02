import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

import FakemainPage from './components/about/FakemainPage';
import MyProfilePage from './components/profile/myprofile';
import MyOrderPage from './components/profile/myorder';
import MyOffersPage from './components/profile/myoffers';

import MainPage    from './components/about/MainPage';

import LoginPage   from './components/about/LoginPage';
import RegisterPage   from './components/about/RegisterPage';

import PaintingPage   from './components/about/PaintingPage';
import PicturePage   from './components/about/PicturePage';
import VideoPage   from './components/about/VideoPage';

import OrderPlacedPage from './components/about/OrderPlacedPage';
import CheckoutPage from './components/about/CheckoutPage';
import NewPasswordPage from './components/about/NewPasswordPage';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="fakemain" component={FakemainPage} />

    <Route path="myprofile" component={MyProfilePage} />
    <Route path="myorder" component={MyOrderPage} />
    <Route path="myoffers" component={MyOffersPage} />

    <Route path="register" component={RegisterPage} />
    <Route path="login" component={LoginPage} />
    <Route path="main" component={MainPage} />

    <Route path="painting" component={PaintingPage} />
    <Route path="picture" component={PicturePage} />
    <Route path="video" component={VideoPage} />

    <Route path="orderplaced" component={OrderPlacedPage} />
    <Route path="checkout" component={CheckoutPage} />
    <Route path="newpass" component={NewPasswordPage} />
  </Route>
);
