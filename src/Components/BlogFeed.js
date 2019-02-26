import React, { Component } from 'react';
import '../../src/App.css'
import '../../node_modules/bulma/css/bulma.css';
import Pagination from '../Components/pagination';
import { connect } from 'react-redux'

import { fetchPostList, selectPost } from '../actions/setList';
import Spinner from '../Components/spinner';


import { bindActionCreators } from 'redux';




let marginBox = {
  margin: '1.5em'
}
let marginTitle = {
  margin: '0.7em'
}


class BlogFeed extends Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostList(1);
  }
  
  
  render() {
    if (this.props.loading) {
            return (
              <div className="column">
              <div className="">
                <p className="title" style={marginTitle}>
                Loading posts...
                </p>
                
                 
                    <div className="card" style={marginBox}>
                      <div className="card-content">
                        <div className="content">
                          <div>
                            <Spinner />
                          </div>
    
                        </div>
    
                      </div>
                    
                    </div>
              </div>
    
            </div>

            )
    } 
    
    else {
      
    
    if (!this.props.error) {

          return (
        <div className="column">
          
            <p className="title purple" style={marginTitle}>
            آخر المشاركات
            </p>
            {this.props.postList.map((post) => {
              return (
                <div key={post.slug} className="card" style={marginBox} onClick={() => this.props.selectPost(post)}>
                <div className="card-image">
                  
                  <figure className="image ">
                    
                      <img src={post.featured_image} alt={post.title} />
                    
                  </figure>
                 </div> 
                  <div className="card-content">
                    <div className="media-content">
                      
                        <p className="title is-4">{post.title}
                        <span className="button">{post.published}</span></p>
                        
                      
                    </div>
                  
                  <div className="content">
                    <br />
                    {post.summary}
                    <br />
                    {post.categories.map((cat) => {
                          return (
                            <div>
                            <span key={cat.slug} className="button is-info">{cat.name}</span>
                            </div>
                          )
                        })}
                  </div>
                  </div>
                
                </div>
              )
            })}
            <Pagination />
            

        </div>
      )
      
    }
    else {
      console.log(this.props.postMeta)
      return (
        <div className="column">
          <div className="">
            <p className="title" style={marginTitle}>
            آخر المشاركات
            </p>
            
             
                <div className="card" style={marginBox}>
                  <div className="card-content">
                    <div className="content">

                      Error {this.props.error}<br />
                      The list of posts could not be loaded<br />
                      Please reload the website!<br/>
                      <div>
                        
                      </div>

                    </div>

                  </div>
                
                </div>
          </div>

        </div>
      )
    }
    //end of first if

  }
  //end of second if
    
  } 
}

function mapStateToProps(state) {
  return {
    postList: state.postData.postList,
    postMeta: state.postData.postMeta,
    error: state.postData.error,
    loading: state.postData.loading
  
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectPost: selectPost, fetchPostList: fetchPostList }, dispatch)
} 


export default connect(mapStateToProps, mapDispatchToProps)(BlogFeed);
