import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import BooksList from "../components/BooksList";
import Navbar from "../components/Navbar/Navbar";

const Subject = () => {
    const {subject, number} = useParams()

    const [data, setData] = useState({})

    const [fetchBooks, isBooksLoading, booksError] = useFetching(async () => {
        const result = await (await fetch(`https://forbiddengdz.ru/gdz/json/${subject}/${number}`)).json()
        console.log(result)
        setData(result)
    })

    useEffect(() => {
        fetchBooks()
    }, [subject, number]);

    return (
        <div>
            <Navbar/>
            <main>
                {booksError ?
                    <h1>{booksError}</h1>
                    :
                    isBooksLoading ?
                        <Loader/>
                        :
                        <div>
                            <BooksList books={data["books"]}/>
                        </div>
                }
            </main>
        </div>
    );
};

export default Subject;