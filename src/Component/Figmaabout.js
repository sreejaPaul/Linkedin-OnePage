import React from 'react';
import './about.css';

class Figmaabout extends React.Component{
    render(){
        return(
            <div id="aboutdiv">
                <div style={{padding: "20px 0px 0px 25px"}}>
                    <h4>{"About"}</h4>
                    {"Figma is the first professional-grade online tool created specifically for interface design. Born on the Web, Figma helps the entire product team create, test, and ship better designs,faster."}
                </div>
                <div style={{display:"inline-block"}}>
                    <div className="divider">
                        {"Website URL"}
                        <br/>
                        <a href="https://www.figma.com/" id="link">{"Figma.com"}</a>
                    </div>
                    <div className="divider">
                        <span style={{color:"grey"}}>{"Funding via Crunchbase"}</span>
                        <br/>
                        <b>{"Series D"}</b>
                        <br/>
                        <b style={{color:"blue"}}>{"US$50M"}</b>
                    </div>
                </div>
                <p style={{marginLeft:"400px"}}><a href="\" id="link">{"See all details"}</a></p>
            </div>
        );
    }
}
export default Figmaabout;