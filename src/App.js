
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import Mainpage from './components/MainPage/Mainpage';
import SecondPage from './components/SecondPage/SecondPage';

export const ShopStateContext = React.createContext(null)

function App() {
    let [shopState, setShopState] = useState([]);
    let [shopCategories, setShopCategories] = useState(['', '', '', '', ''])
    let [paramsState, setParamsState] = useState('')

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
    
    shopState.forEach(el => el.count = 0)
    
    shopCategories.length = 5

    let productsHandler = (allProducts = [], category) =>{
        let objectsOfCategory = allProducts.filter((item, index) =>{
            if(item.category.name === category){
                return item
            }
        })
        return objectsOfCategory
    } 

    let getParams = (str) =>{
        const result = str.charAt(0).toUpperCase() + str.slice(1)
    
        setParamsState(result)
        
    }
    return (
    <BrowserRouter>
        <ShopStateContext.Provider value={[shopState]}>
            
            <div className="App">
                <Routes>
                    <Route path='/' element = {<Mainpage categories={shopCategories} setCategories={setShopCategories}/> } />
                    <Route path={`/:category` } element= {<SecondPage getParams ={getParams} title={paramsState} arrayItems={productsHandler(shopState, paramsState )}/>} /> 
                    <Route path={`/${paramsState}/:id` } element= {<AboutPage/>} /> 
                </Routes>

            </div>
        </ShopStateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
