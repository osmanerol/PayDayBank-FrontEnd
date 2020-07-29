import React, { Component } from 'react'
import swal from 'sweetalert';

class ProductForm extends Component {
    state={
        id:null,
        name:'',
        price:'',
        available:1,
        description:''
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        event.preventDefault(); 
    }

    onSubmit=(event)=>{
        if(this.state.name!=='' && this.state.price!=='' && this.state.description!==''){
            // update
        }
        else{
            swal("Oops", "Fill in all blanks", "warning");
        }
        event.preventDefault();
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
                        <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.onChange} />
                    </div>
                </div>
                <div className='row editInput'>
                    <div className="col-md-3 col-12">
                        <h5>Price</h5>
                    </div>
                    <div className="col-md-6 col-12">
                        <input type="text" className="form-control" name='Price' value={this.state.price} onChange={this.onChange} />
                    </div>
                </div>
                <div className='row editInput'>
                    <div className="col-md-3 col-12">
                    </div>
                    <div className="col-md-6 col-12">
                        <input type="checkbox" name='available' value={this.state.available} onChange={this.onChange} /> Currently Available
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
            </div>
        )
    }
}

export default ProductForm;