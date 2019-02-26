import React, { Component } from 'react'
import Butter from 'buttercms';



const butter  = Butter('0bd07fa7e1a9a1161750cb37535c418ab1593c19')


class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }
    componentDidMount() {
        butter.page.retrieve('*','about-us').then((resp) => {
            this.setState({
                content: resp.data.data
            })
        })
    
    }


    render() {
        
            
        return(
            <div className="column is-paddingless">
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        
                    <h1 className="title">
                       Hi There! This section is in construction
                    </h1>
                    <h2 className="subtitle">
                        
                    We'll soon have some great content to show to you here. Come back anytime!
                    </h2>
                    </div>
                </div>
                </section>

            
            </div>
        )}

        
    

}

export default AboutUs