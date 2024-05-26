import React from "react";
import ReactDOM from "react-dom";
//import { Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import Login from "./Login";
import Register from "./Register";
import "./Login.css";
import Logout from "./Logout";
import BlogList from "./BlogList";
import UserBlog from "./UserBlog";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetails";
import Layout from "./Layout";
import AuthenticatedRoute from "./AuthenticatedRoute";
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthenticatedRoute element={WelcomePage } />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/WelcomePage" element={<AuthenticatedRoute element={WelcomePage } />}/>
            <Route path="/blogs" element={<AuthenticatedRoute element={BlogList } />} />
            <Route path="/userblog" element={<AuthenticatedRoute element={UserBlog } />} />
            <Route path="/createpost" element={<AuthenticatedRoute element={CreatePost } />} />
            <Route path="/post/:id" element={<AuthenticatedRoute element={PostDetail } />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);