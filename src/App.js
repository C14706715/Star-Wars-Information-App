import React, { Component } from 'react';
import PeopleList from './ListInfo/PeopleList';
import PlanetList from './ListInfo/PlanetList';
import FilmList from './ListInfo/FilmList';
import StarshipList from './ListInfo/StarshipList';
import VehicleList from './ListInfo/VehicleList';
import SpeciesList from './ListInfo/SpeciesList';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        //ToggleDivs used to show and hide information
				this.state = {show: true};
        this.togglePeopleDiv = this.togglePeopleDiv.bind(this)
				this.togglePlanetsDiv = this.togglePlanetsDiv.bind(this)
				this.toggleFilmsDiv = this.toggleFilmsDiv.bind(this)
				this.toggleStarshipsDiv = this.toggleStarshipsDiv.bind(this)
				this.toggleVehiclesDiv = this.toggleVehiclesDiv.bind(this)
				this.toggleSpeciesDiv = this.toggleSpeciesDiv.bind(this)
			
        //initialized to empty array 
        this.state = {
            people: [],
            planets: [],
						films: [],
					  starships: [],
						vehicles: [],
						species: [],
				}
		  }
			
			togglePeopleDiv = () =>{
				const {show1} = this.state;
				this.setState({show1 : !show1})
			}
			
			togglePlanetsDiv = () =>{
				const {show2} = this.state;
				this.setState({show2 : !show2})
			}
			
			toggleFilmsDiv = () =>{
				const {show3} = this.state;
				this.setState({show3 : !show3})
			}
			
			toggleStarshipsDiv = () =>{
				const {show4} = this.state;
				this.setState({show4 : !show4})
			}
			
			toggleVehiclesDiv = () =>{
				const {show5} = this.state;
				this.setState({show5 : !show5})
			}
			
			toggleSpeciesDiv = () =>{
				const {show6} = this.state;
				this.setState({show6 : !show6})
			}
			
		

    //retrieve the information from the API
    getPeople(){
        //returns a promise
        return axios.get("http://swapi.co/api/people")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({people: response.data.results})
        })
    }
    
    //retrieve the information from the API
    getPlanets(){
        //returns a promise
        return axios.get("http://swapi.co/api/planets")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({planets: response.data.results})
        })
    }
	
		//retrieve the information from the API
    getFilms(){
        //returns a promise
        return axios.get("http://swapi.co/api/films")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({films: response.data.results})
        })
    }
    
		//retrieve the information from the API
    getStarships(){
        //returns a promise
        return axios.get("http://swapi.co/api/starships")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({starships: response.data.results})
        })
    }
	
		//retrieve the information from the API
    getVehicles(){
        //returns a promise
        return axios.get("http://swapi.co/api/vehicles")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({vehicles: response.data.results})
        })
    }
    
		//retrieve the information from the API
    getSpecies(){
        //returns a promise
        return axios.get("http://swapi.co/api/species")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({species: response.data.results})
        })
    }

    componentDidMount(){
        this.getPeople()
        this.getPlanets()
				this.getFilms()
				this.getStarships()
			  this.getVehicles()
				this.getSpecies()
    }

    
    render() {
        
				const {people} = this.state;
        const {planets} = this.state;
				const {films} = this.state;
				const {starships} = this.state;
			  const {vehicles} = this.state;
				const {species} = this.state;
			
				
        //Buttons created and styled using bootstrap for each starwars section
        return (
            <div className="App">
							<div class='wrapper text-center'>
							<div class="btn-group-lg">
							<button onClick={this.togglePeopleDiv} type="button" class="btn btn-primary">People</button>
							<button onClick={this.togglePlanetsDiv} type="button" class="btn btn-success">Planets</button>
							<button onClick={this.toggleSpeciesDiv} type="button" class="btn btn-warning">Species</button>
							<button onClick={this.toggleStarshipsDiv} type="button" class="btn btn-primary">Starships</button>
							<button onClick={this.toggleVehiclesDiv} type="button" class="btn btn-success">Vehicles</button>
							<button onClick={this.toggleFilmsDiv} type="button" 
							class="btn btn-warning">Films</button>
						</div>
					</div>
							{this.state.show1 && 
								<div>
									<PeopleList people={people}/>
								</div>
							}
					
							{this.state.show2 && 
								<div>
									<PlanetList planets={planets}/>
								</div>
							}	
							
							{this.state.show3 && 
								<div>
									<FilmList films = {films}/>
								</div>
							}
					
							{this.state.show4 && 
								<div>
									<StarshipList starships = {starships}/>
								</div>
							}
							
							{this.state.show5 && 
								<div>
									<VehicleList vehicles = {vehicles}/>
								</div>
							}
					
							{this.state.show6 && 
								<div>
									<SpeciesList species = {species}/>
								</div>
							}
            </div>
        );
    }
}






export default App;
