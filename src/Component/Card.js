import React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons';

class Card extends React.Component{
    render(){
        return(
            <div style={{display:"inline-block"}}>
                <div id="profile">
                    <img src={this.props.pic} alt={this.props.name} id="profilepic"/>
                </div>
                <div id="info">
                    <div><b>{this.props.name}</b></div>
                    <div>{this.props.type + " . "+ this.props.follower}</div>
                    <div id="followbtn"><FontAwesomeIcon icon={faEye} /></div>
                </div>
            </div>
        );
    }
}
export default Card;