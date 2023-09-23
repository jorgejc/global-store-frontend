import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getProducts, createProduct } from '../../services/productService';
import { getBrands } from '../../services/brandService';
import { getCategories } from '../../services/categoryService';
import Swal from 'sweetalert2';
import { Logout } from '../auth/Logout';
import useAuthContext from '../../hooks/useAuthContext';
const moment = require('moment');

export const ProductNew = () => {

    const { logout } = useAuthContext();
    const [valoresForm, setValoresForm] = useState([]);
    const [products, setProducts] = useState([]);
    const { name = '', description = '', price = 0, inventory = 0, image = '', category, brand } = valoresForm;

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);


    const listProducts = async () => {
        try {
            const { data } = await getProducts();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listProducts();
    }, []);

    const listBrands = async () => {
        try {
            const { data } = await getBrands();
            setBrands(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listBrands();
    }, []);

    const listCategories = async () => {
        try {
            const { data } = await getCategories();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listCategories();
    }, []);

    const handleOnChange = (e) => {
        setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
    }

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        const product = {
            name, description, price, inventory, image,
            category: {
                _id: category,
            },
            brand: {
                _id: brand
            }
        }

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const resp = await createProduct(product);
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="sidebar-header">
                        <h3>Nuevo Producto</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                </div>
            </div>
            <form onSubmit={(e) => handleCreateProduct(e)}>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" name="name" value={name} required className="form-control" onChange={(e) => handleOnChange(e)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <input type="text" name="description" value={description} required className="form-control" onChange={(e) => handleOnChange(e)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="number" name="price" value={price} required className="form-control" onChange={(e) => handleOnChange(e)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Inventario</label>
                            <input type="number" name="inventory" value={inventory} required className="form-control" onChange={(e) => handleOnChange(e)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Imagen</label>
                            <input type="text" name="image" value={image} required className="form-control" onChange={(e) => handleOnChange(e)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <select className="form-select"
                                required
                                onChange={(e) => handleOnChange(e)}
                                name='category'
                                value={category}>
                                <option value="">--SELECCIONE--</option>
                                {
                                    categories.map(({ _id, name }) => {
                                        return <option key={_id} value={_id}>{name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Marca</label>
                            <select className="form-select"
                                required
                                onChange={(e) => handleOnChange(e)}
                                name='brand'
                                value={brand}>
                                <option value="">--SELECCIONE--</option>
                                {
                                    brands.map(({ _id, name }) => {
                                        return <option key={_id} value={_id}>{name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">Guardar</button>
            </form>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope='row'>#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Inventario</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((product, index) => {

                            return <tr>
                                <th scope='row'> {index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category.name}</td>
                                <td>{product.brand.name}</td>
                                <td>{product.inventory}</td>
                                <td>{product.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <br />
            <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
        </div>
    )
}
