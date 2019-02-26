import React, {Component} from 'react';
import '../../src/App.css';
import '../../node_modules/bulma/css/bulma.css';
import { connect } from 'react-redux';
import Spinner from '../Components/spinner'


let marginTitle = {
    margin: ' 0.1em 01em'
  }
  let marginBox = {
    margin: '1.5em'
  }

class ActivePost extends Component {
    

    render(){
        if (this.props.loading) {
            return ( 
                <div className="column is-two-thirds">
                    
                    <p className="title  purple is-1" style={marginTitle}>
                    مقال متميز
                    </p>
                    <div className="card" style={marginBox}>
                        <div className="card-image">
                            <figure className="image">
                                <Spinner />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">
                                    
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <br />
                                
                            </div>
                            
                        </div>
                    </div>
                
            </div> 
            )
            
        } 
        else {
            
        
        if (!this.props.error) {
            return ( 
                <div className="column is-two-thirds">
                    
                    <p className="title purple is-1" style={marginTitle}>
                    مقال متميز
                    </p>
                    <div className="card" style={marginBox}>
                        <div className="card-image">
                            <figure className="image">
                            <img src={this.props.activePost.featured_image} alt={this.props.activePost.title} />
                            </figure>
                        </div>

                        <section className="hero is-dark">
                                <div className="hero-body">
                                    <div className="container">
                                    <h1 className="title">
                                    {this.props.activePost.title}
                                    </h1>
                                    <h2 className="subtitle">
                                    {this.props.activePost.published}
                                    </h2>
                                    
                                    </div>
                                </div>
                        </section>



                        <div className="card-content">
                             <div className="media">
                                <div className="media-content">
                                    
                                </div>
                            </div>
                            <div className="content">
                                <br />
                                <div dangerouslySetInnerHTML={{__html:this.props.activePost.body}}></div>
                                
                            </div>
                            
                        </div>
                    </div>
                
            </div> 
            )
        }
        else {

            return(
                <div className="column is-two-thirds">
                    
                        <p className="title purple is-1" style={marginTitle}>
                        مقال متميز
                        </p>
                        <div className="card" style={marginBox}>
                            <div className="card-image">
                                <figure className="image">
                                    <img alt="">
                                    </img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">
                                            An error seems to be preventing this article from loading. Please refresh this page. 
                                        </p>
                                    </div>
                                </div>
                                <div className="content">

                                </div>
                                
                            </div>
                        </div>
                    
                </div>
            )
        }
    }
    }
}


function mapStateToProps(state){
    return {
        activePost: state.activePost,
        loaded: state.postData.loaded,
        error: state.postData.error
    }
}


export default connect(mapStateToProps)(ActivePost);