import React, {createRef, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import BookStructure from "../components/BookStructure";
import BookAnswer from "../components/BookAnswer";

const Book = () => {
    const {subject, number, book, task} = useParams()

    const [data, setData] = useState({})

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
        answer.current.scrollIntoView();
    }

    useEffect(() => {
        if (task) {
            scrollToAnswer()
        }
    }, [task]);

    return (
        <div>
            {dataError ?
                <h1>{dataError}</h1>
                :
                isDataLoading ?
                    <Loader/>
                    :
                    <div>
                        <BookStructure structure={data["structure"]}/>
                        <div ref={answer}>
                            {task && <BookAnswer task_url={`/${subject}/${number}/${book}/${task}`}/>}
                        </div>
                    </div>
            }
        </div>
    );
};

export default Book;