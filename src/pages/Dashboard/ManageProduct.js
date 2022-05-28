import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-tundra-74859.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = _id => {
        const deleteProduct = window.confirm('Are you sure to delete this item?')
        if (deleteProduct) {
            const url = `https://cryptic-tundra-74859.herokuapp.com/product/${_id}`;


            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== _id)
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

                            <td><button onClick={handleDeleteProduct} class="btn btn-xs">delete product</button></td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    )
}




export default ManageProduct;