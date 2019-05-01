import React from "react";
import { render } from "react-dom";
import Result from "./Result";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import pf from "petfinder-client";
import {Provider} from "./SearchContext";

const petfinder = pf({
  key : process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
       location : "Seattle, WA",
       animal : "",
       breed : "",
       breeds : [],
       LocationHandle : this.LocationHandle,
       handleAnimalChange: this.handleAnimalChange,
       handleBreedChange : this.handleBreedChange,
       getBreeds: this.getBreeds

    };
  }
  LocationHandle = event =>{
    this.setState({
        location : event.target.value
    })
}
handleAnimalChange = event =>{
    this.setState({
        animal: event.target.value,
        breed : ""
    }, this.getBreeds);
};
handleBreedChange = event =>{
    this.setState({
        breed : event.target.value
    });
};
getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
       
    } else {
      this.setState({
        breeds: []
      });
    }
  }
 render(){
   return(
     <div>
       <header>
          <Link to ="/">Adopt Me!</Link>
       </header>
       <Provider value = {this.state}>
       <Router>
         
         <Result path = "/"/>
       <Details path = "/details/:id"/>
       <SearchParams path = "/search" />
       </Router>
       </Provider>
       
     </div>
   )
 }
 
      
  }



render(<App/>, document.getElementById("root"));
