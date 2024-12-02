import React from 'react';
import BookTopic from "./BookTopic";
import BookTask from "./BookTask";

const BookChapter = ({chapter, setTask, scroll}) => {
    return (
        <div>
            <h1>{chapter["title"]}</h1>
            <div className="tasks">
                {chapter["tasks"].map((task) =>
                    <BookTask task={task} setTask={setTask} scroll={scroll} key={task.title}/>
                )}
            </div>
            {chapter["topics"].map((topic) =>
                <BookTopic topic={topic} setTask={setTask} scroll={scroll} key={topic.title}/>
            )}
        </div>
    );
};

export default BookChapter;