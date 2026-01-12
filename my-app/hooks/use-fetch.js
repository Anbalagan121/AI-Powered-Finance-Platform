"use client";

import { useState } from "react";

export default function useFetch(fn) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const execute = async (...args) => {
        setLoading(true);
        setError(undefined);
        try {
            const result = await fn(...args);
            setData(result);
            return result;
        } catch (err) {
            setError(err.message || "An error occurred");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn: execute };
}