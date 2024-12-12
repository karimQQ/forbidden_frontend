import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className={classes.navbar}>
            <div className={classes.navbar_links}>
                <Link className={classes.navbar_link} to="/">Главная</Link>
                <div className={classes.navbar_link}>Выбрать класс</div>
                <Link className={classes.navbar_link} to="/extension">Расширение</Link>
                <Link className={classes.navbar_link} to="/games">Игры</Link>
            </div>
        </header>
    );
};

export default Navbar;