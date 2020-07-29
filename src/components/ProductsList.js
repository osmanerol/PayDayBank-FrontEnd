import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductsList extends Component {
    state={
        products:[]
    }

    render() {
        return (
            <div className='subContainer'>
                <h3>Products</h3>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product=>
                                <tr key={product.id} >
                                    <td><Link to={`/products/${product.id}`} className='tableLink text-decoration-none text-dark'>{product.name}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.available===1 ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductsList;