import { useState, useEffect } from 'react';
import API from 'src/axios';

const useProductData = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await API.get('/api/products');
            setProductData(res.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return { productData, loading, error };
};

export default useProductData;
