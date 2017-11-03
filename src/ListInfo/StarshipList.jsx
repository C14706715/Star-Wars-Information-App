import React, {Component} from 'react';
import StarshipInfo from './Info/StarshipInfo';

class StarshipList extends Component{
    render(){
        const starships = this.props.starships;
        
        return(
     
            <div>
                {
                    starships.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <StarshipInfo starshipInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default StarshipList;