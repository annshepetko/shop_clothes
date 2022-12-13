
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Button from './components/Button/Button';
import Mainpage from './components/MainPage/Mainpage';

export const ShopStateContext = React.createContext(null)

function App() {
    let [shopState, setShopState] = useState([]);
    let [shopCategories, setShopCategories] = useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(res => setShopState(res));
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(res => setShopCategories(res))
        
    }, [])
    shopCategories.length = 5

    
    return (
    <BrowserRouter>
        <ShopStateContext.Provider value={[shopCategories, setShopCategories]}>
            <div className="App">
                <Mainpage/>

            </div>
        </ShopStateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
