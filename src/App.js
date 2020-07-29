import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//  pages
import LoginPage from './components/pages/LoginPage';
import ErrorPage from './components/pages/ErrorPage';
import ProductsPage from './components/pages/ProductsPage';  
import ProductDetailPage from './components/pages/ProductDetailPage';
import ProfilePage from './components/pages/ProfilePage';

class App extends Component {
  state={
    isLoggedIn:false
  }
  
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.user.token!==null){
      this.setState({
        isLoggedIn:true
      });
    }
  }

  render() {
    return (
      <div className='appContainer'>
        <Switch>
          <Route path="/" exact strict component={LoginPage} />
          <Route path="/products" exact strict component={ProductsPage} />
          <Route path="/products/:id" exact strict component={ProductDetailPage} />
          <Route path="/profile" exact strict component={ProfilePage} />
          <Route component={ErrorPage} />
        </Switch>
        {/*
        {
          this.state.isLoggedIn ? 
            <Switch>
            <Route path="/" exact strict component={LoginPage} />
            <Route path="/products" exact strict component={ProductsPage} />
            <Route path="/products/:id" exact strict component={ProductDetailPage} />
            <Route path="/profile" exact strict component={ProfilePage} />
            <Route component={ErrorPage} />
          </Switch> :  
            <Switch>
            <Route component={LoginPage} />
          </Switch>
        }
      */}
      </div>
    )
  }
}

const mapStateToProps=(state,props)=>{
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App);