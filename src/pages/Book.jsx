import React, {createRef, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import BookStructure from "../components/BookStructure";
import BookAnswer from "../components/BookAnswer";

const Book = () => {
    const {subject, number, book} = useParams()

    const [data, setData] = useState({})
    const [task, setTask] = useState(null)

    const answer = createRef()

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const result = await (await fetch(`https://forbiddengdz.ru/gdz/json/${subject}/${number}/${book}`)).json()
        console.log(result)
        setData(result)
    })

    useEffect(() => {
        fetchData()
    }, [subject, number, book]);

    const scrollToAnswer = () => {
        console.log(answer.current)
        answer.current.scrollIntoView();
    }

    return (
        <div>
            {dataError ?
                <h1>{dataError}</h1>
                :
                isDataLoading ?
                    <Loader/>
                    :
                    <div>
                        <BookStructure structure={data["structure"]} setTask={setTask} scroll={scrollToAnswer}/>
                        <div ref={answer}>
                            {task !== null && <BookAnswer task_url={task}/>}
                        </div>
                    </div>
            }
        </div>
    );
};

export default Book;