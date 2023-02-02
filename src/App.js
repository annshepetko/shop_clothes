
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import BasketPage from './components/BasketPage/BasketPage';
import Mainpage from './components/MainPage/Mainpage';
import SecondPage from './components/SecondPage/SecondPage';
import Form from './components/Form/Form';
import Loader from './components/Loader/Loader';

export const ShopStateContext = React.createContext(null)


function App() {
    let [shopState, setShopState] = useState([]);  // main state (all products)
    let [shopCategories, setShopCategories] = useState([]) // categories state
    let [paramsState, setParamsState] = useState('') // param state (adress str)
    let [emptyBasket, setEmptyBasket] = useState([]) // basket state

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
    
    let getOrder = (order) =>{
        setEmptyBasket([...emptyBasket, order])
        
    }

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
        <ShopStateContext.Provider value={[shopState, setShopState]}>
         
           

            {  shopState.length < 10 ?
            
            <Loader/>
            :
            <div  className="App">
                <Routes>
                    <Route path='/' element = {<Mainpage categories={shopCategories} setCategories={setShopCategories}/> }/>
                    <Route path={`/:category` } element= {<SecondPage getParams ={getParams} title={paramsState} arrayItems={productsHandler(shopState, paramsState )}/>} /> 
                    <Route path={`/${paramsState}/:id` } element= {<AboutPage setOrder = {getOrder} />} /> 
                    <Route path='/basket' element ={<BasketPage setBasketItems={setEmptyBasket} basketItems={emptyBasket}/>}/>
                    <Route path='/form' element ={<Form orderItems ={emptyBasket} />}/>
                </Routes>
            </div>
            }
            
            
            
        </ShopStateContext.Provider>    
    </BrowserRouter>
  );
}

export default App;
