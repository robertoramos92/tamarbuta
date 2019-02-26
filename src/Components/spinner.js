import React from 'react';
import '../Style/spinner.css';

export default function Spinner(props) {
    
    return (
        <div className="lds-css ng-scope">
        <div className="lds-spinner hoop"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

