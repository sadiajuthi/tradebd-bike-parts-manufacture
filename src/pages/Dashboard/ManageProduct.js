import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = _id => {
        const deleteProduct = window.confirm('Are you sure to delete this item?')
        if (deleteProduct) {
            const url = `http://localhost:5000/${_id}`;


            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(p => p._id !== _id)
                    setProducts(remaining)
                })
        }
    }

    return (

        <table class="table w-full text-xl">
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Price</th>
                    <th>Available quantity</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
                {
                    products.map(product =>
                        <tr>
                            <th>{product.name}</th>

                            <td>{product.price}</td>

                            <td> {product.quantity}</td>

                            <td><button onClick={() => handleDeleteProduct(product._id)} class="btn btn-xs">delete product</button></td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    )
}




export default ManageProduct;