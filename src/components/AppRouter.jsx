import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Book from "../pages/Book";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
            <Route path="/:subject/:number/:book" element={<Book/>}/>
        </Routes>
    );
};

export default AppRouter;