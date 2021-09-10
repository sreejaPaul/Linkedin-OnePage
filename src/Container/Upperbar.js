import React from 'react';
import './Upperbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSearch ,faBell,faCommentDots,faEllipsisV,faUser} from '@fortawesome/free-solid-svg-icons';

class Upperbar extends React.Component{
    render(){
        return(
            <div  id="topbar">
                <div id="linkedinbtn" style={{float:"left"}}>
                    <FontAwesomeIcon icon={faLinkedin} size="3x" style={{color: "white"}}/>
                </div>
                <div style={{float:"left"}}>
                    <button id="searchbtn">
                        <FontAwesomeIcon icon={faSearch} size="lg" style={{color: "white"}}/>
                    </button>
                </div>
                <div style={{float:"left"}}>
                    <input type="text" placeholder="Search" id="searchbox"/>
                </div>
                <div id="notification" style={{float:"left"}}>
                    <FontAwesomeIcon icon={faBell} size="lg" style={{color: "white"}}/>
                </div>
                <div id="message" style={{float:"left"}}>
                    <FontAwesomeIcon icon={faCommentDots} size="lg" style={{color: "white"}}/>
                </div>
                <div id="account" style={{float:"left"}}>
                    <FontAwesomeIcon icon={faUser} size="lg" style={{color: "white"}}/>
                </div>
                <div id="more" style={{float:"left"}}>
                    <FontAwesomeIcon icon={faEllipsisV} size="sm" style={{color: "white"}}/>
                    <FontAwesomeIcon icon={faEllipsisV} size="sm" style={{color: "white"}}/>
                    <FontAwesomeIcon icon={faEllipsisV} size="sm" style={{color: "white"}}/>
                </div>
                <div id="premium" style={{float:"left"}}>
                    <b>{"Upgrade to Premium"}</b>
                </div>
                
            </div>
        )
    }
}

export default Upperbar;