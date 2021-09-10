import React from 'react';
import './Footer.css';
import Linkedin from '../Images/Linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    render(){
        const divstyle={
            marginLeft:"1050px",
            marginTop:"20px",
            backgroundColor: "#E6E6FA",
            width:"400px",
            borderRadius:"5px",
            height:"320px",
        };
        
        return(
            <div style={divstyle}>
                <div style={{display:"inline-block"}}>
                <div className="firstrow"><b>{"About"}</b></div>
                <div className="firstrow"><b>{"Accessability"}</b></div>
                <div className="firstrow"><b>{"Help Center"}</b></div>
                <div className="secondrow"><b>{"Privacy & Terms > "}</b></div>
                <div className="secondrow"><b>{"Ad Choices"}</b></div>
                <div className="thirdrow"><b>{"Advertising"}</b></div>
                <div className="thirdrow"><b>{"Business Services > "}</b></div>
                <div className="lastrow"><b>{"Get the Linkedin App"}</b></div>
                <div id="threedots"><FontAwesomeIcon icon={faEllipsisH} style={{margin:"15px 15px 0px 15px"}}/></div>
                </div>
                <hr id="hrline"/>
                <div className="hrfirst">
                    <img src={Linkedin} id="lkd" alt="Linkedin" />
                </div>
                <div className="hrsecond"><b>{"Linkedin © 2021"}</b></div>
            </div>
        );
    }
}

export default Footer;