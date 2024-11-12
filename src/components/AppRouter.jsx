import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
        </Routes>
    );
};

export default AppRouter;