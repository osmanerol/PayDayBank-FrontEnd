import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions/productsAction';

class ProductsList extends Component {
    state={
        products:[],
        loading:false
    }

    UNSAFE_componentWillMount() {
        this.props.getAllProducts();
        this.setState({
            loading:true
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            products:nextProps.products.productsList,
            loading:false
        });
    }    

    render() {
        return (
            <div className='subContainer'>
                <h3>Products</h3>
                {
                    this.state.loading ? 
                    <div className='loadingContainer'>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> : 
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
                                this.state.products.map(product=>
                                    <tr key={product.id} >
                                        <td><Link to={`/products/${product.id}`} className='tableLink text-decoration-none text-dark'>{product.name}</Link></td>
                                        <td>{product.price}</td>
                                        <td>{product.available===1 ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }</td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

const mapStateToProps=(state,action)=>{
    return {
        products:state.products
    }
}

const mapDispatchToProps={
    getAllProducts:getAllProducts
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);