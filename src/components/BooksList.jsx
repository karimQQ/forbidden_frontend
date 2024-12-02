import React from 'react';
import BookInfo from "./BookInfo";

const BooksList = ({books}) => {
    return (
        <div>
            {books.map(e => <BookInfo book={e} key={e.id}/>)}
        </div>
    );
};

export default BooksList;