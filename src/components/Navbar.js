import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    logOut=()=>{
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark'>
                    <Link className='navbar-brand'  to={localStorage.getItem('jwtToken')!==null ? '/products' : '/'}>
                        PayDay Bank
                    </Link>
                    {
                        localStorage.getItem('jwtToken') && 
                        <Link className='text-light text-decoration-none' onClick={this.logOut} to='/'>
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