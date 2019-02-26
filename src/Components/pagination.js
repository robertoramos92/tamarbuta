import React, { Component } from 'react'
import '../../src/App.css'
import '../../node_modules/bulma/css/bulma.css';
import { connect } from 'react-redux'

import { fetchPostList, createBackButton, createForwardButton} from '../actions/setList';
import { bindActionCreators } from 'redux';

let marginBox = {
    margin: '1.5em'
  }
class Pagination extends Component {

    
    render() {
        if (this.props.postMeta.next_page && !this.props.postMeta.previous_page) {
            return (
       
                <div  className="card" style={marginBox}>
                      <div className="card-content">
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <button className="pagination-next button is-info" onClick={() => this.props.fetchPostList(this.props.postMeta.next_page)} >Older</button>
                    </nav>
                    </div>
                    </div>
            )
            
        } 

        if (!this.props.postMeta.next_page && this.props.postMeta.previous_page) {

            return (
       
                <div  className="card" style={marginBox}>
                      <div className="card-content">
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <button className="pagination-previous button is-info" onClick={() => this.props.fetchPostList(this.props.postMeta.previous_page)} >Recent</button>
                    </nav>
                    </div>
                    </div>
            )
        } 
        if (this.props.postMeta.next_page && this.props.postMeta.previous_page) {
            return (
       
                <div  className="card" style={marginBox}>
                      <div className="card-content">
                    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <button className="pagination-previous button is-info" onClick={() => this.props.fetchPostList(this.props.postMeta.previous_page)} >Recent</button>
                    <button className="pagination-next button is-info" onClick={() => this.props.fetchPostList(this.props.postMeta.next_page)} >Older</button>
                    
                    </nav>
                    </div>
                    </div>
            )
        }
            
    
    }
}

function mapStateToProps(state) {
    return {
      
      postMeta: state.postData.postMeta,
      error: state.postData.error,
      loading: state.postData.loading,
      pagination: state.paginationButtons
    
    }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        fetchPostList: fetchPostList, 
        createBackButton: createBackButton, 
        createForwardButton : createForwardButton 
    }, dispatch)
  } 
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pagination);