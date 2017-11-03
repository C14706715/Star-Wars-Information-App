import React, {Component} from 'react';
import PeopleInfo from './Info/PeopleInfo';

class PeopleList extends Component{
    render(){
        const people = this.props.people;
        
        return(
     
            <div>
                {
                    people.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <PeopleInfo peopleInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default PeopleList;