import React, {Component} from 'react';
import FilmInfo from './Info/FilmInfo';

class FilmList extends Component{
  render(){
    //Initialize films with the props.films info
    const films = this.props.films;
        
    return(
      <div>
      {
        films.map((p) => {
        console.log(p);
        return (
        <div key={p.url}>
        	<h1 className="char-name">
        		{p.title}
        	</h1>
        	<FilmInfo filmInfo={p}/>
      	</div>
     			)
  			})
       }
       </div>
       );
    }
}
export default FilmList;