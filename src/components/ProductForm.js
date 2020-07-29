import React, { Component } from 'react'
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { getProductById, updateProduct } from '../actions/productsAction';
import { Redirect } from 'react-router-dom';

class ProductForm extends Component {
    state={
        id:this.props.id,
        name:'',
        price:'',
        available:false,
        description:'',
        goProducts:false
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        event.preventDefault(); 
    }

    onChangeCheck=(event)=>{
        console.log("checkbox ",event.target.value)
        this.setState({
            available:event.target.checked
        });
    }

    onSubmit=(event)=>{
        if(this.state.name!=='' && this.state.price!=='' && this.state.description!==''){
            this.props.updateProduct(this.state.id,this.state.name,parseInt(this.state.price),this.state.available===true ? 1 : 0,this.state.description);
        }
        else{
            swal("Oops", "Fill in all blanks", "warning");
        }
        event.preventDefault();
    }

    UNSAFE_componentWillMount(){
        this.props.getProductById(this.props.id);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            id:nextProps.products.product.id,
            name:nextProps.products.product.name,
            price:nextProps.products.product.price,
            available:nextProps.products.product.available===1 ? true : false,
            description:nextProps.products.product.description
        });
        // update basarili
        if(nextProps.products.updateStatus===200){
            swal("Good job!", "Update succeeded.\n You will redirect to products page.", "success");
            setTimeout(()=>{
                swal.close();
                this.setState({
                    goProducts:true
                });    
            },1000);
        }
        // update basarisiz
        if(nextProps.products.updateStatus===0){
            swal("Error", "Something went wrong", "error");
        }
    }

    render() {
        return (
            <div className='subContainer'>
                <h3>Product Edit</h3>
                <form onSubmit={this.onSubmit} className='editForm'>
                    <div className='row editInput mx-auto'>
                        <div className="col-md-3 col-12">
                            <h5>Name</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="text" className="form-control" name='name' value={this.state.name || ''} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                            <h5>Price</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="text" className="form-control" name='price' value={this.state.price || ''} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                        </div>
                        <div className="col-md-6 col-12">
                            {/* 
                            <input type="checkbox" name='available' value={this.state.available} onChange={this.onChange} checked={this.state.available===0 ? false : true} /> Currently Available
                            */}
                            <input type="checkbox" name='available' value={this.state.available} onChange={this.onChangeCheck} checked={this.state.available} /> Currently Available
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                            <h5>Description</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <textarea className="form-control" rows="3" name='description' value={this.state.description} onChange={this.onChange} ></textarea>
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                        </div>
                        <div className="col-md-6 col-12">
                            <button className='btn btn-primary btn-block'>Save</button>
                        </div>
                    </div>
                </form>
                {
                    this.state.goProducts && <Redirect to='/products' />
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
    getProductById:getProductById,
    updateProduct:updateProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);