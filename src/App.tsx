import React, {  useEffect } from 'react';
import './css/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Top from './page/top';
import OurBrand from './page/our_brand';
import Company from './page/company';
import Recruit from './page/recruit';
import News from './page/news';
import Contact from './page/contact';
import English from './page/english';
import AppBar from './compoment/appBar';
import MyFooter from './compoment/footer/footer_';
import MyContext from './context';
import { ourBrandData } from './store';
import EnFooter from './compoment/footer/enFooter';






function App() {


  const { pathname } = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  return (
    <main className='App'>

      <MyContext.Provider value={{brandData:ourBrandData}}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Top/>} > </Route>
        <Route path="/top" element={<Top/>} > </Route>
        <Route path="/company" element={<Company/>}> </Route>
        <Route path="/our_brand/femmue" element={<OurBrand/>}> </Route>
        <Route path="/our_brand/allgood" element={<OurBrand/>}> </Route>
        <Route path="/our_brand/imfrom" element={<OurBrand/>}> </Route>
        <Route path="/our_brand/sunfood" element={<OurBrand/>}> </Route>
        <Route path="/our_brand/herban" element={<OurBrand/>}> </Route>
        <Route path="/our_brand/lagom" element={<OurBrand/>}> </Route>
        <Route path="/recruit" element={<Recruit/>}> </Route>
        <Route path="/news" element={<News/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/english" element={<English/>}> </Route>
      </Routes>
      {pathname.includes('english') ? <EnFooter/> : <MyFooter/>}
      </MyContext.Provider>
    </main>
  );
}

export default App;
