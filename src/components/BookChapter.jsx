import React from 'react';
import BookTopic from "./BookTopic";
import BookTask from "./BookTask";

const BookChapter = ({chapter}) => {
    return (
        <div>
            <h1>{chapter["title"]}</h1>
            <div className="tasks">
                {chapter["tasks"].map((task) =>
                    <BookTask task={task} key={task.title}/>
                )}
            </div>
            {chapter["topics"].map((topic) =>
                <BookTopic topic={topic} key={topic.title}/>
            )}
        </div>
    );
};

export default BookChapter;