import { axiosInstance } from '../helpers/axios-config';

const getCategories = () => {
    return axiosInstance.get('category', {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const createCategory = (data) => {
    return axiosInstance.post('category', data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const updateCategory = (categoryId, data) => {
    return axiosInstance.put(`category/${categoryId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

export {
    getCategories, createCategory, updateCategory
}