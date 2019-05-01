import React from "react";


const SearchContext = React.createContext({

    location : "Seattle, WA",
    animal : "",
    breed : "",
    breeds : [],
    LocationHandle(){},
    handleAnimalChange(){},
    handleBreedChange(){},
    getBreeds(){}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;