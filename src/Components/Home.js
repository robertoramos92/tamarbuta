import React, { Component } from 'react'
import hero from '../images/hero-shot.jpg'
import heroBlog from '../images/hero-blog.jpg'
import gavel from '../images/gavel.svg'
import chat from '../images/chat.svg'
import Butter from 'buttercms';

const img = {
    backgroundImage:`url(${hero})`,
    backgroundPosition: 'right bottom',
    backgroundSize: 'cover'
}

const img2 = {

    backgroundImage:`url(${heroBlog})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'

}

const white = {
    color: "white"
}

const darkBlue = {
    color: "#2D3338"
}

const butter  = Butter('0bd07fa7e1a9a1161750cb37535c418ab1593c19')


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        }
    }
    componentDidMount() {
        butter.page.retrieve('*','home').then((resp) => {
            this.setState({
                content: resp.data.data
            })
        })
    
    }


    render() {
        
            
            
        return(
            <div className="column is-paddingless">
            <section className="hero is-large" style={img}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        
                    <h1 className="title" style={white}>
                      {/*}  {homepage.fields.section_1_header} */}
                      نون نرصد ونراقب
                    </h1>
                    <h2 className="subtitle" style={white}>
                    {/* {homepage.fields.section_1_body} */}
                    
                    </h2>
                    </div>
                </div>
                </section>

            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container has-text-left">
                        <div className="columns">
                        <div className="column  is-one-fifth">
                        <img src={chat} alt="Tamar Network" />
                        </div>
                        <div className="column">
                    <h1 className="title" style={darkBlue}>
                    {/*{homepage.fields.section_2_header}*/}
                    وتبادل الخبرات
                    </h1>
                    <h2 className="subtitle" style={darkBlue}>
                    {/*{homepage.fields.section_2_body}*/}
                    على شبكتنا الاجتماعية
                    </h2>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="hero is-medium" style={img2}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        
                    <h1 className="title">
                    {/*{homepage.fields.section_3_header}*/}
                    لدينا أيضا بلوق
                    </h1>
                    <h2 className="subtitle">
                    {/*{homepage.fields.section_3_body} */}
                    داخل شبكتنا الاجتماعية ، سيكون لديك مساحة مدونة للحصول على الأخبار ومشاركتها
                    </h2>
                    </div>
                </div>
                </section>
            
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container has-text-right">
                    <img src={gavel} alt="denounce human rights violations" width="20%" height="20%"/>
                          
                    <h1 className="title">
                    {/*{homepage.fields.section_4_header} */}
                    التنديد
                    </h1>
                    <h2 className="subtitle">
                    {/*{homepage.fields.section_4_body} */}
                    انتهاكات حقوق الإنسان
                    </h2>
                    </div>
                </div>
            </section>

            </div>
        )}

    
    

}

export default Home