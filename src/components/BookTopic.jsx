import React from 'react';
import BookTask from "./BookTask";

const BookTopic = ({topic, setTask,scroll}) => {
    return (
        <div>
            <h3>{topic["title"]}</h3>
            <div className="tasks">
                {topic["tasks"].map((task) =>
                    <BookTask task={task} setTask={setTask} scroll={scroll} key={task.title}/>
                )}
            </div>
        </div>
    );
};

export default BookTopic;