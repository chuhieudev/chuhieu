import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';
import ProductListpage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

var routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListpage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:(history)=><ProductActionPage history={history}/>
    },
    {
        path:'/product/:id',
        exact:false,
        main:(match)=><ProductActionPage match={match}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotfoundPage/>
    },
];

export default routes;