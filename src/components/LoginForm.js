import React, { Component } from 'react';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
    state={
        username:'',
        password:'',
        isError:false,
        isLoggedIn:false
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        event.preventDefault();
    }

    onSubmit=(event)=>{
        if(this.state.email!=='' && this.state.password!==''){
            this.props.logIn(this.state.username,this.state.password);
        }
        else{
            swal("Oops", "Fill in all blanks", "warning");
        }
        event.preventDefault();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.user.error!==this.props.isError){
            this.setState({
                isError:nextProps.user.error
            });
        }
        if(nextProps.user.token!==null){
            this.setState({
                isLoggedIn:true
            });
        }
    }

    render() {
        return (
            <div className='container logInForm'>
                <p className='logInTitle mt-5 text-center'>PayDay Bank Log-In</p>
                <div className='row'>
                    <form className='col-lg-6 col-md-8 col-11 mx-auto' onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email Address</label>
                            <input type="email" name="username" id="username" className='form-control' value={this.state.username} onChange={this.onChange} placeholder='paydaybank@example.com' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' className='form-control' value={this.state.password} onChange={this.onChange} placeholder='Password' />
                        </div>
                        {
                            this.state.isError && <h6 id='errorTitle'>Username or password is incorrect. </h6>
                        }
                        <button type='submit' className='btn btn-primary mx-auto btn-block text-bold'>Log - In</button>
                    </form>
                </div>
                {
                    this.state.isLoggedIn && <Redirect to='/products' />
                }
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(LoginForm);