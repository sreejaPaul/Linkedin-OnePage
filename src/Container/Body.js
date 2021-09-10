import React from 'react';
import Figmaabout from '../Component/Figmaabout';
import Figmaintro from '../Component/Figmaintro';
import Figmasection from '../Component/Figmasection';
import Footer from './Footer';
import Recomendation from '../Component/Recomendation';

class Body extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: "#E6E6FA"}}>
                <Figmaintro/>
                <Figmasection/>
                <Figmaabout/>
                <Recomendation/>
                <Footer/>
            </div>
        );
    }
}

export default Body;