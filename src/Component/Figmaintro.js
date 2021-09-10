import React from 'react';
import FigmaBackground from '../Images/Figma-Background.png';
import Figmalogo from '../Images/Figma-logo.png';
import './Figmaintro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';


class Figmaintro extends React.Component{
    render(){
        const bgimagestyle={
            backgroundImage: `url(${FigmaBackground})`,
            backgroundRepeat: 'no-repeat',
        };
        
        return(
            <div>
                <div style={bgimagestyle} id="bgimgstyle"></div>
                <div>
                    <img src={Figmalogo} alt="logo" id="logostyle"/>
                </div>
                <div id="introdivstyle">
                    <div style={{padding: "60px 0px 0px 25px"}}>
                        <h2>{"Figma"}</h2>
                        {"A design platform for teams who build products together."}
                        <p style={{color:"grey"}}>{"Design . San Fransisco,CA . 101,282 followers"}</p>
                        <a href="\" id="link"><b>{"See all 358 employees on Linkedin →"}</b></a>
                        <div>
                            <div id="follow">
                                <FontAwesomeIcon icon={faEye} style={{color:"white",margin:"15px 10px 0px 15px"}}/>
                                {"Follow"}
                            </div>
                            <div id="visitlink">
                                <FontAwesomeIcon icon={faExternalLinkAlt} style={{color:"#0072b1",margin:"15px 15px 0px 15px"}}/>
                                {"Visit Website"}
                            </div>
                            <div id="threedot">
                                <FontAwesomeIcon icon={faEllipsisH} style={{color:"#0072b1",margin:"15px 15px 0px 15px"}}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Figmaintro;