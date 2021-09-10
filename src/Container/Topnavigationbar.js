import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faBriefcase,faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';

class Topnavigationbar extends React.Component{
    render(){
        const iconstyle={marginRight:"10px"};
        const divstyle={float: "left", padding: "10px",marginLeft:"200px"};
        return(
        <div style={{height:"50px"}}>
            <div style={divstyle}>
                <FontAwesomeIcon icon={faHome} style={iconstyle}/>
                {"Home"}
            </div>
            <div style={divstyle}>
                <FontAwesomeIcon icon={faUserFriends} style={iconstyle}/>
                {"My Network"}
            </div>
            <div style={divstyle}>
                <FontAwesomeIcon icon={faBriefcase} style={iconstyle}/>
                {"Job Offers"}
            </div>
            <div style={divstyle}>
                <FontAwesomeIcon icon={faUser} style={iconstyle}/>
                {"My Profile"}
            </div>
        </div>
        );
    }
}
export default Topnavigationbar;