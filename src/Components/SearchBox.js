import React, { Component } from 'react'
import { connect } from 'react-redux'

const padding = {
    padding: 0
}
const padding2 = {
    padding: '3em'
}

class SearchBox extends Component {

    render() {
        return (
            <div className="column" style={padding}>
                <section className="hero is-primary is-medium">
                    <div className="hero" style={padding2}>
                    <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title">
                            Loading search results for '{this.props.searchInput}'
                        </h1>
                    </div>
                    <div className="column is-half">
                        
                    
                    </div>
                </div>
                <div className="columns">
                    
                </div>
                </div>
                </div>
                </section>
            </div>
        )
    }

}

function mapStatetoProps(state) {
    return {
        searchInput: state.searchInput,
        searchResult: state.searchResult
    }
}
export default connect(mapStatetoProps)(SearchBox)