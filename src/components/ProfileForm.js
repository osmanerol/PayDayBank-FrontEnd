import React, { Component } from 'react'
import swal from 'sweetalert';

class ProfileForm extends Component {
    state={
        fullname:'',
        email:'',
        title:''
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        event.preventDefault();
    }

    onSubmit=(event)=>{
        if(this.state.fullname!=='' && this.state.title!==''){
            //  update
        }
        else{
            swal("Oops", "Fill in all blanks", "warning");
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className='subContainer'>
                <h3>Profile</h3>
                <form onSubmit={this.onSubmit} className='editForm'>
                    <div className='row editInput mx-auto'>
                        <div className="col-md-3 col-12">
                            <h5>Fullname</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="text" className="form-control" name='fullname' value={this.state.fullname} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                            <h5>Email</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="email" className="form-control" disabled  name='email' value={this.state.email} />
                        </div>
                    </div>
                    <div className='row editInput'>
                        <div className="col-md-3 col-12">
                            <h5>Title</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="title" className="form-control" name='title' value={this.state.title} onChange={this.onChange} />
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

export default ProfileForm;