import React from 'react';
import BookChapter from "./BookChapter";

const BookStructure = ({structure, setTask, scroll}) => {
    console.log(structure)
    return (
        <div className="structure">
            {structure.map((chapter) =>
                <BookChapter chapter={chapter} setTask={setTask} scroll={scroll} key={chapter.title}/>
            )}
        </div>
    );
};

export default BookStructure;