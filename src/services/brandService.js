import { axiosInstance } from '../helpers/axios-config';

const getBrands = () => {
    return axiosInstance.get('brand', {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const createBrand = (data) => {
    return axiosInstance.post('brand', data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const updateBrand = (brandId, data) => {
    return axiosInstance.put(`brand/${brandId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

export {
    getBrands, createBrand, updateBrand
}