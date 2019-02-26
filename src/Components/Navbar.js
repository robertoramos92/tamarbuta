import React from 'react';

import '../../src/App.css';
import '../../node_modules/bulma/css/bulma.css';
import logo from '../images/logo.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleDelayedChange } from '../actions/setList';
import { Link } from 'react-router-dom';
const padtop = {
    paddingBottom: 0
}
class Navbar extends React.Component {
    handleTextChange(e) {
        this.props.handleDelayedChange(e.target.value)
    }
    render(){
        return (
     <div className="column" style={padtop}>
    <nav className="navbar champagne is-fixed-top">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="../">
                نون
                 </a>
                <span className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                <h1 className="navbar-item purple navlink">
                        
                        </h1>
                {/*<div className="navbar-item purple">
                        <div className="field">
                            
                            <div className="control">
                                <input className="input is-rounded" 
                                    type="text" 
                                    placeholder="Type to search" 
                                    
                                    onChange={e => this.handleTextChange(e)}
                                    
                                    
                             />
                            </div>
                            
                        </div>
                </div> */}
                    <Link to='/' className="navbar-item is-active purple navlink">
                    الصفحة الرئيسية
                        </Link>
                    {/*<Link to='/activepost' className="navbar-item purple navlink">
                            Blog
                        </Link> */}
                    
                        
                        
                        <Link to='/denounce' className="navbar-item purple navlink">
                        التنديد
                        </Link>
                        <Link to='/aboutus' className="navbar-item purple navlink">
                        من نحن 

                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link purple navlink">
                            الشبكة
                            </a>
                            <div className="navbar-dropdown">
                                <a href="https://tamarbouta.ning.com/main/authorization/signIn?target=http%3A%2F%2Ftamarbouta.ning.com%2F" className="navbar-item purple navlink">
                                تسجيل دخول

                                </a>
                                <hr className="navbar-divider" />
                                <a href="https://tamarbouta.ning.com/main/authorization/signUp?target=https%3A%2F%2Ftamarbouta.ning.com%2F%3Fxgi%3DBEpL6GJi6VpikM" className="navbar-item purple navlink">
                                سجل
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </nav>
    </div>
    
        )
    }

}  

function mapStateToProps(state) {
    return ({
        searchInput: state.searchInput
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ handleDelayedChange }, dispatch)
  } 

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);