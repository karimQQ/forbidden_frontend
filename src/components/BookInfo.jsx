import React from 'react';
import {Link} from "react-router-dom";

const BookInfo = ({book}) => {
    return (
        <div className="book-info">
            <img src={"https://forbiddengdz.ru/gdz" + book["cover"]["url"]} alt="book"/>
            <Link to={book["url"]}>{book.title}</Link>
        </div>);
};

export default BookInfo;