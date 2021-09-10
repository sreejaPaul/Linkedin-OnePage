import React from 'react';
import './sections.css';

class Figmasection extends React.Component{
    render(){
        return(
            <div id="sectiondiv">
                <div style={{display:'inline-block'}}>
                    <div id="overview"><b>{"Overview"}</b></div>
                    <div className="section"><b>{"About"}</b></div>
                    <div className="section"><b>{"Products"}</b></div>
                    <div className="section"><b>{"Posts"}</b></div>
                    <div className="section"><b>{"Jobs"}</b></div>
                    <div className="section"><b>{"People"}</b></div>
                    <div className="section"><b>{"Videos"}</b></div>
                </div>
                <hr id="underline"/>
            </div>
        );
    }
}

export default Figmasection;