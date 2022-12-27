
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/MainPage/Mainpage';
import SecondPage from './components/SecondPage/SecondPage';

export const ShopStateContext = React.createContext(null)

function App() {
    let [shopState, setShopState] = useState([]);
    let [shopCategories, setShopCategories] = useState(['', '', '', '', ''])

    let requestFunc = async () =>{

     await fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(res => setShopCategories(res))
    await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(res => setShopState(res));

    }
    useEffect(()=> {
        requestFunc()
        
    }, [])
    shopCategories.length = 5
    
    let productsHandler = (allProducts = [], category) =>{
        let objectsOfCategory = allProducts.filter((item, index) =>{
            if(item.category.name === category){
                return item
            }
        })
        return objectsOfCategory
    } 

    
    return (
    <BrowserRouter>
        <ShopStateContext.Provider value={[shopCategories, setShopCategories]}>
            
            <div className="App">
                <Routes>
                    <Route path='/' element = {<Mainpage/> } />
                    <Route path={`/${shopCategories[0].name}` } element= {<SecondPage title={shopCategories[0].name} arrayItems={productsHandler(shopState, shopCategories[0].name )}/>} /> 
                    <Route path={`/${shopCategories[1].name}` } element= {<SecondPage title={shopCategories[1].name} arrayItems={productsHandler(shopState, shopCategories[1].name )}/>} /> 
                    <Route path={`/${shopCategories[2].name}` } element= {<SecondPage title={shopCategories[2].name} arrayItems={productsHandler(shopState, shopCategories[2].name )}/>} /> 
                    <Route path={`/${shopCategories[3].name}` } element= {<SecondPage title={shopCategories[3].name} arrayItems={productsHandler(shopState, shopCategories[3].name )}/>} /> 
                    <Route path={`/${shopCategories[4].name}` } element= {<SecondPage title={shopCategories[4].name} arrayItems={productsHandler(shopState, shopCategories[4].name )}/>} /> 

                </Routes>

            </div>
        </ShopStateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
