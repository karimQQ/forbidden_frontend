import React from 'react';
import {Link} from "react-router-dom";

const BookTask = ({task}) => {
    return (
        <Link className="task" to={task["url"]}>
            {task["title"]}
        </Link>
    );
};

export default BookTask;