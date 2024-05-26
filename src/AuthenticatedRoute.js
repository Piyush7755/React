// AuthenticatedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Login from './Login';
import { getCookie } from './Cookie';
import Layout from './Layout';
const AuthenticatedRoute = ({ element: Component}) => {
    const username=getCookie("username")
    console.log(username)
    return (
        
    
                username ? (
                    <Layout>
            <Component />
        </Layout>
                ) : (
                    <Login/>
                )
            
    
    );
};

export default AuthenticatedRoute;
