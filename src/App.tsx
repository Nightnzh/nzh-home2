import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Top from './page/top';
import OurBrand from './page/our_brand';
import Company from './page/company';
import Recruit from './page/recruit';
import News from './page/news';
import Contact from './page/contact';
import English from './page/english';
import AppBar from './compoment/appBar';
import MyFooter from './page/footer';

function App() {

  return (
    <main className='App'>

      <AppBar />
      <Routes>
        <Route path="/" element={<Top/>} > </Route>
        <Route path="/top" element={<Top/>} > </Route>
        <Route path="/company" element={<Company/>}> </Route>
        <Route path="/our_brand" element={<OurBrand/>}> </Route>
        <Route path="/recruit" element={<Recruit/>}> </Route>
        <Route path="/news" element={<News/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/english" element={<English/>}> </Route>
      </Routes>
      <MyFooter/>
    </main>
  );
}

export default App;
