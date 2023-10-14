import { useState, useEffect } from 'react';
import API from 'src/axios';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await API.get('/api/category');
            setCategoryData(res.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Function to trigger data refresh
    const refreshData = () => {
        fetchData();
    };

    return { categoryData, loading, error, refreshData };
};

export default useCategoryData;
