import { Route } from "../interfaces/route";
import {lazy} from 'react'


export const routes: Route[] = [
    {
        path:'/login',
        name:'login',
        component : lazy( ()=> import('../pages/LoginPage')),
    },
    {
        path:'/',
        name:'home',
        component: lazy( ()=> import('../pages/HomePage') ),
    },
    
    
]