import React, { Component } from 'react'
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { getUser, updateUser } from  '../actions/userAction';
import { Redirect } from 'react-router-dom';

class ProfileForm extends Component {
    state={
        fullname:'',
        username:'',
        title:'',
        password:'',
        goProducts:false
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        event.preventDefault();
    }

    onSubmit=(event)=>{
        if(this.state.fullname!=='' && this.state.title!==''){
            this.props.updateUser(this.state.username,this.state.fullname,this.state.title,this.state.password);
        }
        else{
            swal("Oops", "Fill in all blanks", "warning");
        }
        event.preventDefault();
    }

    UNSAFE_componentWillMount(){
        this.props.getUser(localStorage.getItem('username'));
    }

    UNSAFE_componentWillReceiveProps(nextProps,nextState){
        this.setState({
            fullname:nextProps.user.fullname,
            username:nextProps.user.username,
            title:nextProps.user.title,
            password:nextProps.user.password
        });
        // update basarili
        if(nextProps.user.status===200){
            swal("Good job!", "Update succeeded.\n You will redirect to products page.", "success");
            setTimeout(()=>{
                swal.close();
                this.setState({
                    goProducts:true
                });    
            },1000);
        }
        // update basarisiz
        if(nextProps.user.status===0){
            swal("Error", "Something went wrong", "error");
        }
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
                            <input type="email" className="form-control" disabled  name='username' value={this.state.username} />
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
                {
                    this.state.goProducts && <Redirect to='/products' />
                }
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        user:state.user
    };
}

const mapDispatchToProps={
    getUser:getUser,
    updateUser:updateUser
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileForm);