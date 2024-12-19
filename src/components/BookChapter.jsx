import React from 'react';
import BookTopic from "./BookTopic";
import BookTask from "./BookTask";

const BookChapter = ({chapter}) => {
    return (
        <div>
            <h2>{chapter["title"]}</h2>
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