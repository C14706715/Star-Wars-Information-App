import React, {Component} from 'react';

class PeopleInfo extends Component {
   
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
        const info = this.props.peopleInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show People Information</p>
        }
        
        return(
            /*This designs the Hide button*/
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide People Information</p>
            <ul>
								<li><h2>Height: {info.height}</h2></li>
								<li><h2>Weight: {info.mass}</h2></li>
								<li><h2>Hair Colour: {info.hair_color}</h2></li>
								<li><h2>Skin Colour: {info.skin_color}</h2></li>
								<li><h2>Eye Colour: {info.eye_color}</h2></li>
								<li><h2>Birthdate: {info.birth_year}</h2></li>
								<li><h2>Gender: {info.gender}</h2></li>
						</ul>
            </div>
        )
        
    }
}

export default PeopleInfo;