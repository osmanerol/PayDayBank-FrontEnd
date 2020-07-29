import React, { Component } from 'react';

//  components
import Navbar from '../Navbar';
import Footer from '../Footer';
import LoginForm from '../LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
                <Footer />
            </div>
        )
    }
}

export default LoginPage;