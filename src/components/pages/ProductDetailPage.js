import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeftBar from '../LeftBar';
import ProductForm from '../ProductForm';

class ProductDetailPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='row'>
                    <div className="col-lg-3 col-md-4 col-12">
                        <LeftBar />
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                        <ProductForm id={this.props.match.params.id} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductDetailPage;