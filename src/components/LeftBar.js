import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftBar extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-md-12 col-6 leftBar">
                    <NavLink to='/products' className='btn btn-outline-secondary btn-block leftBarButton'>Products</NavLink>
                </div>
                <div className="col-md-12 col-6 leftBar">
                    <NavLink to='/profile' className='btn btn-outline-secondary btn-block leftBarButton'>Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default LeftBar;