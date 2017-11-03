import React, {Component} from 'react';

class StarshipInfo extends Component {
   
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
        const info = this.props.starshipInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Starship Information</p>
        }
        
        return(
            /*This designs the Hide button*/
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide Starship Information</p>
            <ul>
								<li><h2>Model: {info.model}</h2></li>
								<li><h2>Manufacturer: {info.manufacturer}</h2></li>
								<li><h2>Cost in Credits: {info.cost_in_credits}</h2></li>
								<li><h2>Length: {info.length}</h2></li>
                <li><h2>Max Atmosphering Speed: {info.max_atmosphering_speed}</h2></li>
                <li><h2>Crew: {info.crew}</h2></li>
								<li><h2>Passengers: {info.passengers}</h2></li>
							  <li><h2>Cargo Capacity: {info.cargo_capacity}</h2></li>
								<li><h2>Consumables: {info.consumables}</h2></li>
							  <li><h2>Hyperdrive Rating: {info.hyperdrive_rating}</h2></li>
						  	<li><h2>MGLT: {info.MGLT}</h2></li>
							  <li><h2>Starship Class: {info.starship_class}</h2></li>
            </ul>
            </div>
        )    
    }
}

export default StarshipInfo;