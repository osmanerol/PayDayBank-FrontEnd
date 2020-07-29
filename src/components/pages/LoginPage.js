import React, { Component } from 'react';
import { connect } from 'react-redux';

//  actions
import { logIn } from '../../actions/userAction';

//  components
import Navbar from '../Navbar';
import Footer from '../Footer';
import LoginForm from '../LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm logIn={this.props.logIn}  />
                <Footer />
            </div>
        )
    }
}

const mapSatateToProps=(state,props)=>{
    return {
        user:state.user
    };
}

const mapDispatchToProps={
    logIn:logIn
}

export default connect(mapSatateToProps,mapDispatchToProps)(LoginPage);