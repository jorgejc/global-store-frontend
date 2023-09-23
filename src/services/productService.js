import { axiosInstance } from '../helpers/axios-config';

const getProducts = () => {
    return axiosInstance.get('product', {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const createProduct = (data) => {
    return axiosInstance.post('product', data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const updateProduct = (productId, data) => {
    return axiosInstance.put(`product/${productId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

export {
    getProducts, createProduct, updateProduct
}