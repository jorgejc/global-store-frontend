import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthContext from '../../hooks/useAuthContext';


export const Login = () => {
  const {login} = useAuthContext();
  const [formValues, setFormValues] = useState({});
  const { email = '', password = '' } = formValues;
  const history = useHistory();

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
      const resp = await login(email, password);
      Swal.close();
      console.log(resp);
      login();
      localStorage.setItem('user', JSON.stringify(resp));
      history.push('/productos');
    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Usuario y/o contraseña incorrectos', 'error');
    }

  }

  return (
    <div className='conteiner mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card'>
            <div className='card-header'>
              <h2>Login</h2>
            </div>
            <div className='card-body'>
              <form onSubmit={handleOnSubmit}>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Email</label>
                      <input name='email' value={email} required className='form-control'
                        type='email' placeholder='Escribe tu email' onChange={handleOnChange} />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <label className='form-label'>Contraseña</label>
                      <input name='password' required value={password} className='form-control'
                        type='password' placeholder='Escribe tu nombre' onChange={handleOnChange} />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className='mb-3'>
                      <Link to='/register'>¿No tienes cuenta?. Regístrate</Link>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button className='btn btn-primary'>Iniciar Sesión</button>
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
