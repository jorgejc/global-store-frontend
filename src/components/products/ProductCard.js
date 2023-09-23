import React from 'react'

export const ProductCard = (props) => {

    const { product } = props;
    
    return (
        <div className="col">
            <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <hr />
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{`Marca: ${product.brand.name}`}</p>
                    <p className="card-text">{`Precio: ${product.price}`}</p>
                    <p className='card-text'>
                        <a href="#">Ver más</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
