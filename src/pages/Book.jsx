import React, {createRef, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import BookStructure from "../components/BookStructure";
import BookAnswer from "../components/BookAnswer";
import Navbar from "../components/Navbar/Navbar";

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
        if (task && answer.current) {
            scrollToAnswer()
        }
    }, [task, answer]);

    return (
        <div>
            <Navbar/>
            <main>
                {dataError ?
                    <h1>{dataError}</h1>
                    :
                    isDataLoading ?
                        <Loader/>
                        :
                        <div>
                            <h1>{data["book"]["title"]}</h1>
                            <BookStructure structure={data["structure"]}/>
                            <div ref={answer}>
                                {task && <BookAnswer task_url={`/${subject}/${number}/${book}/${task}`}/>}
                            </div>
                        </div>
                }
            </main>
        </div>
    );
};

export default Book;