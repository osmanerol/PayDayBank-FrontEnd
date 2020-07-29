import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark'>
                    <Link className='navbar-brand'  to='/'>
                        PayDay Bank
                    </Link>
                    {
                        this.props.user.isLoggedIn &&
                        <Link className='text-light text-decoration-none' to='/'>
                            <span className='mr-2' id='signOutText'>Log-out</span> <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                        </Link>
                    }
                </nav>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Navbar);