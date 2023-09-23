import { axiosInstance } from '../helpers/axios-config';

const getUsers = () => {
    return axiosInstance.get('user', {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const createUser = (name, email, password, storeName, storeDescription) => {
    return axiosInstance.post('user', {
        name,
        email,
        password,
        storeName,
        storeDescription
    }, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

const updateUser = (userId, data) => {
    return axiosInstance.put(`user/${userId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }   
    });
}

export {
    getUsers, createUser, updateUser
}