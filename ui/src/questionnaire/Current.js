import React, { useState, useEffect } from 'react';
import Questions from './Questions';

function Current() {
    const [data, setData] = useState(null);
    const [isFetched, setIsFetched] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/getData").then(res => res.json())
            .then(
                (res) => {
                    setData(res);
                }).catch((e) => {
                console.error(e.message);
            });
        setIsFetched(true);
    }, [isFetched])


    return ( <
        >
        {
            data ? < Questions data = { data }
            /> : ""} </ > );
    }

    export default Current;