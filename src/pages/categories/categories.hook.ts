import { useEffect, useState } from 'react';
import API from 'src/axios';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await API.get('/api/category');
                setCategoryData(res.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCategory();
    }, []);

    return { categoryData, loading, error };
};

export default useCategoryData;
