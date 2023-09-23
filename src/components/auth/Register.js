import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createUser } from '../../services/userService';

export const Register = () => {

    const [formValues, setFormValues] = useState({});
    const { name = '', email = '', password = '', storeName = '', storeDescription = '' } = formValues;

    const handleOnChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {

            Swal.fire({ allowOutsideClick: false, text: 'loading...' });
            Swal.showLoading();
            await createUser(name, email, password, storeName, storeDescription);
            Swal.close();
            setFormValues({ name: '', email: '', password: '', storeName: '', storeDescription: '' });
            Swal.fire('Info', 'Usuario creado con éxito. Diríjase a la página de login para iniciar sesion', 'info');

        } catch(error) {
            console.log(error);
            Swal.fire('Error', 'Se presentó un error al ejecutar la solicitud', 'error');
        }

    }
        return (
            <div className='conteiner mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>Usuario Nuevo</h2>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={ handleOnSubmit }>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <label className='form-label'>Nombre</label>
                                                <input name='name' value={name} required className='form-control'
                                                    placeholder='Escribe tu nombre' 
                                                    onChange={ handleOnChange }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <label className='form-label'>Email</label>
                                                <input name='email' value={email} required className='form-control'
                                                    type='email' placeholder='Escribe tu email' 
                                                    onChange={ handleOnChange }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <label className='form-label'>Contraseña</label>
                                                <input name='password' value={password} required className='form-control'
                                                    type='password' placeholder='Escribe tu nombre' 
                                                    onChange={ handleOnChange }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <label className='form-label'>Nombre de la tienda</label>
                                                <input name='storeName' value={storeName} required className='form-control'
                                                    placeholder='Escribe nombre de la tienda' 
                                                    onChange={ handleOnChange }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <label className='form-label'>Descripción tienda</label>
                                                <input name='storeDescription' value={storeDescription} required className='form-control'
                                                    placeholder='Escribe la descripcion de la tienda' 
                                                    onChange={ handleOnChange }/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='mb-3'>
                                                <Link to='/login'>¿Ya tienes cuenta?. Ingresa</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <button className='btn btn-primary'>Registrarse</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }