import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <header className={classes.navbar}>
            <div className={classes.navbar_links}>
                <Link className={classes.navbar_link} to="/">Главная</Link>
                <div className={classes.navbar_dropdown}
                     onMouseOver={() => setMouseOver(true)}
                     onMouseOut={() => setMouseOver(false)}>
                    <div className={classes.navbar_dropdown_button} onClick={() => {
                        setClicked(!clicked)
                        setMouseOver(false)
                    }}>
                        Выбрать класс
                    </div>
                    {
                        (clicked || mouseOver)
                        &&
                        <div className={classes.navbar_dropdown_list} onClick={() => {
                            setClicked(false)
                            setMouseOver(false)
                        }}>
                            <Link className={classes.navbar_dropdown_link} to="/1-klass">1</Link>
                            <Link className={classes.navbar_dropdown_link} to="/2-klass">2</Link>
                            <Link className={classes.navbar_dropdown_link} to="/3-klass">3</Link>
                            <Link className={classes.navbar_dropdown_link} to="/4-klass">4</Link>
                            <Link className={classes.navbar_dropdown_link} to="/5-klass">5</Link>
                            <Link className={classes.navbar_dropdown_link} to="/6-klass">6</Link>
                            <Link className={classes.navbar_dropdown_link} to="/7-klass">7</Link>
                            <Link className={classes.navbar_dropdown_link} to="/8-klass">8</Link>
                            <Link className={classes.navbar_dropdown_link} to="/9-klass">9</Link>
                            <Link className={classes.navbar_dropdown_link} to="/10-klass">10</Link>
                            <Link className={classes.navbar_dropdown_link} to="/11-klass">11</Link>
                        </div>
                    }
                </div>
                <Link className={classes.navbar_link} to="/extension">Расширение</Link>
                <Link className={classes.navbar_link} to="/games">Игры</Link>
            </div>
        </header>
    );
};

export default Navbar;