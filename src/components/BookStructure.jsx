import React from 'react';
import BookChapter from "./BookChapter";

const BookStructure = ({structure}) => {
    console.log(structure)
    return (
        <div className="structure">
            {structure.map((chapter) =>
                <BookChapter chapter={chapter} key={chapter.title}/>
            )}
        </div>
    );
};

export default BookStructure;