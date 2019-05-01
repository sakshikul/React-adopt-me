import React from "react";
import  { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";
 


class SearchParams extends React.Component{

    state = {
        location : "Seattle, WA",
        animal : "",
        breed : "",
        breeds : []
    }
    
      
    render(){
        return(
<Consumer>
    {context => (
 <div className = "search-params">
 <label htmlFor = "location">
 Location
 <input
 onChange = {this.LocationHandle}
  id="location"
  value={this.state.location}
  placeholder="Location"
 />
 </label>
 <br/>
 <label htmlFor = "animal">
 Animal
 <select
 id = "animal"
 value = {this.state.animal}
 onChange = {this.handleAnimalChange}
 onBlur = {this.handleAnimalChange}
 >
 <option/>
 {ANIMALS.map(animal =>(<option key = {animal} value = {animal} >{animal}</option>
 ))}

 </select>
 </label>
 
 <label htmlFor="breed">
Breed
<select
disabled={this.state.breeds.length===0}
id="breed"
value={this.state.breed}
onChange={this.handleBreedChange}
onBlur={this.handleBreedChange}
>
<option />
{this.state.breeds.map(breed => (
<option key={breed} value={breed}>
{breed}
</option>
))}
</select>
</label>
 <button>Submit</button>
 
 
 </div>
    )}
           
            </Consumer>
        )
    }
}

export default SearchParams;