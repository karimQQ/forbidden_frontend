import React from 'react';

const BookTask = ({task, setTask,scroll}) => {
    return (
        <div className="task" onClick={() => {
            setTask(task["url"])
            scroll()
        }}>
            {task["title"]}
        </div>
    );
};

export default BookTask;