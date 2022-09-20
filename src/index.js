import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {  HashRouter as  BrowserRouter , Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import DS from './components/third-semester/DS/DS';
import NM from './components/third-semester/NM/NM';
import Home from './components/Home/Home';
import CA from './components/third-semester/CA/CA';
import STATS from './components/third-semester/STATS/STATS';
import CG from './components/third-semester/CG/CG';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>  
    <Route path="/" element={<Home/>} />
    <Route path="/ds" element={<DS/>}/>
    <Route path="/nm" element={<NM/>} />
    <Route path="/ca" element={<CA/>} />
    <Route path="/stats" element={<STATS/>} />
    <Route path="/cg" element={<CG/>} />
    </Routes>
    <Footer />
    </BrowserRouter>


);


