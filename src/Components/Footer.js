import React from 'react'
import '../../src/App.css';
import '../../node_modules/bulma/css/bulma.css';


export default function Footer(props) {
    return (
<div className="column">
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>نون</strong> by <a href="https://alternatives.ca">Alternatives Inc</a>. {/*Based on 
      <a href="bulma.io"> Bulma</a>. Made with  <a href="https://buttercms.com"><img src={butterImg} alt="butterCMS" width="10%" height="10%" style={vAling}></img></a>. */}
    </p>
   {/*} <a className="button is-small is-primary is-outlined" href="https://buttercms.com/home/">Admin Login</a> */}
  </div>
  
</footer>
</div>
    )

}