import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@components/container';
import { productData } from 'src/data/product';

const ProductOverview = () => {
    const { id } = useParams()
    const findProduct = productData.find(item => item.id === id)
    return (
        <Container>
            <div>ProductOverview :{findProduct.id}</div>
            <div>ProductOverview :{findProduct.name}</div>
            <div>ProductOverview :{findProduct.price}</div>
        </Container>

    )
}

export default ProductOverview