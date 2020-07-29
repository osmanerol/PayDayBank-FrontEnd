import React, { Component } from 'react'
import { connect} from  'react-redux';
import '../../styles/main.css';

//  components
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeftBar from '../LeftBar';
import ProductsList from '../ProductsList';

class ProductsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='row'>
                    <div className="col-lg-3 col-md-4 col-12">
                        <LeftBar />
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                        <ProductsList products={this.props.products.productList} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return state;
}

export default connect(mapStateToProps)(ProductsPage);