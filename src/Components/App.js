import React, { Component } from 'react';

import '../../node_modules/bulma/css/bulma.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogFeed from './BlogFeed';
import ActivePost from './ActivePost';
import { Provider } from 'react-redux';
import { store } from '../store/store.js';
import Denounce from '../Components/Denounce'

import '../../src/App.css';
import { Route } from 'react-router-dom';
import AboutUs from './AboutUs';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        
      <div>
        <div className="columns navMargins">
         <Navbar/> 
        </div>
        <div className="columns">
        
        </div>
        <div className="columns">
        <Route exact path='/' component={Home} />
        <Route exact path='/activepost' component={ActivePost}/>
        <Route exact path='/activepost' component={BlogFeed} />
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/denounce' component={Denounce}/>
        
        </div>
        <div className="columns">
         <Footer/> 
        </div>
      </div>
      </Provider>
    )
  }
}

export default App;
