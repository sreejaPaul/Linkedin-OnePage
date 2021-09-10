import React from 'react';
import Card from '../Component/Card.js';
import Adobe from '../Images/Adobe.png';
import Behance from '../Images/Behance.png';
import Dribbble from '../Images/Dribbble.png';
import Invision from '../Images/Invision.png';
import Medium from '../Images/Medium.png';
import Overlap from '../Images/Overlap.png';
import Sketch from '../Images/Sketch.png';
import Slack from '../Images/Slack.png';

class Recomendation extends React.Component{
    render(){
        const companyname = ["InVision","Sketch","Dribbble","Behance","Overlap Studio","Medium","Adobe","Slack"];
        const type= ["Internet","Design","Design","Internet","Information Technology & Services","Online Media","Computer Software","Computer Software"];
        const follower = ["137K followers","33K followers","162K followers","67K followers","105 followers","101K followers","2.68M followers","582K followers"];
        const pics = [Invision,Sketch,Dribbble,Behance,Overlap,Medium,Adobe,Slack];
        const divstyle={
            marginLeft:"1050px",
            marginTop:"-900px",

            width:"410px",
            backgroundColor:"white",
            borderRadius:"5px",
            height:"620px",
            
        };
        return(
            <div style={divstyle}>
                <div style={{padding:"14px"}}><b>{"Pages people also viewed"}</b></div>
                {companyname.map((company,index)=>{
                    return <Card key={company} name={company} type={type[index]} follower={follower[index]} pic={pics[index]}/>
                })}
                
            </div>
        );
    }
}

export default Recomendation;