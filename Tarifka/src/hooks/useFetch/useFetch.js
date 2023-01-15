import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error }

}

export default useFetch;