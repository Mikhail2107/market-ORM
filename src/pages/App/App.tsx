// import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../../share/Header/Header'
import Footer from '../../share/Footer/Footer';
import Aside from '../../share/Aside/Aside';
import RecommendPage from '../RecommendPage/RecommendPage';
import CartPage from '../CartPage/CartPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import DeliveryPage from '../DeliveryPage/DeliveryPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import HistoryPageId from '../../widgets/HistoryPageId/HistoryPageId';
import ProductPage from '../../pages/ProductPage/ProductPage';

import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(dt => setData(dt))
  },[])
  console.log(data)
  return (
    <>
          <Router>
      <main  className='main'>
        <header>
          <Header /> 
        </header>
        <section>
            <Routes>
              <Route path='/' element={<RecommendPage />}/>
              <Route path='/product/:productId' element={<ProductPage/>}/>
              <Route path='/cart' element={<CartPage />}/>
              <Route path='/history' element={<HistoryPage />}/>
              <Route path='/history/:historyId' element={<HistoryPageId/>}/>              
              <Route path='/delivery' element={<DeliveryPage />}/>
              <Route path='/*' element={<ErrorPage />}/>
            </Routes>
                    
        </section> 
        <aside>
            <Aside />
        </aside> 
        <footer>
          <Footer />
        </footer>        
      </main>
      </Router>
    </>
    
  )
}

export default App;
