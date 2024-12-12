import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Book from "../pages/Book";
import Games from "../pages/Games";
import ClassNumber from "../pages/ClassNumber";
import Subject from "../pages/Subject";
import Extension from "../pages/Extension";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacy_policy" element={<PrivacyPolicy/>}/>
            <Route path="/extension" element={<Extension/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/:subject/:number/:book" element={<Book/>}/>
            <Route path="/:subject/:number/:book/:task" element={<Book/>}/>
            <Route path="/:number" element={<ClassNumber/>}/>
            <Route path="/:subject/:number" element={<Subject/>}/>
        </Routes>
    );
};

export default AppRouter;