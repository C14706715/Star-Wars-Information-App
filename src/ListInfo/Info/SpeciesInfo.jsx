import React, {Component} from 'react';

class SpeciesInfo extends Component {
   
    constructor(props){
        super(props); 
        
        this.state ={
            expanded: false,
        }
        
        //initialising the open and close
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    
    /*Functionality to changes the state of the open and close */
    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }
    
    render(){
        const info = this.props.speciesInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show  Species Information</p>
        }
        
        return(
            /*This designs the Hide button*/
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide Species Information</p>
            <ul>
								<li><h2>Classification: {info.classification}</h2></li>
								<li><h2>Designation: {info.designation}</h2></li>
								<li><h2>Average Height: {info.average_height}</h2></li>
								<li><h2>Skin Colours: {info.skin_colors}</h2></li>
                <li><h2>Hair Colours: {info.hair_colors}</h2></li>
                <li><h2>Eye Colours: {info.eye_colors}</h2></li>
								<li><h2>Average Lifespan: {info.average_lifespan}</h2></li>
								<li><h2>Language: {info.language}</h2></li>
            </ul>
            </div>
        )    
    }
}

export default SpeciesInfo;