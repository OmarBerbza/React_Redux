import axios from "axios";
import { createStore } from "redux";

const initialState = {
     continents: [
        {
            code: 'AF',
            nom: 'Africa',
            surface: 3e10,
            avatar: 'https://media.istockphoto.com/id/817045128/vector/africa-map-colorful-orange-vector-illustration.jpg?s=612x612&w=0&k=20&c=DXx5sW3jQZyg9fbW1ep7wTGicfxnrS-c_FarBNbogqg=',
            population: 34,
            pays: [
                {
                    nom: 'Morocco',
                    population: 4e7,
                    capital: 'rabat',
                    indepYear: 2022,
                    image: '',
                }
            ]
        },
        
        {
            code: 'EU',
            nom: 'Europe',
            surface: 3e20,
            avatar: 'https://www.worldatlas.com/r/w2560-q80/upload/f3/53/df/europe-map.png',
            population: 3e4,
            pays: [
                {
                    nom: 'Spain',
                    population: 4e8,
                    capital: 'Madrid',
                    indepYear: 2022,
                    image: '',
                }
            ]
        },
    ]
}

// Q7
async function getContinents() {
    // method 1
    // axios.get("https://fakeapi.com/continents").then(({data}) => {
    //     store.dispatch({
    //         type: 'remplirData',
    //         payload: data,
    //     })
    // }).catch(e => console.log(e))

    // method 2 
    const { data } = await axios.get('https://fakeapi.com/continents')
    store.dispatch({
        type: 'remplirData',
        payload: data,
    })
    console.log('called')
}

getContinents()

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ajouterPays':
            return {
                ...state,
                continents: state.continents.map((continent) => {
                    if(continent.code === action.payload.cntCode) {
                        return {
                            ...continent,
                            // population: continent.population + action.payload.pays.population, hadi mo7al wach kayna
                            pays: [ ...continent.pays, action.payload.pays]
                        }
                    }
                    return continent;
                })
            }
        case 'modifierPopulation':
            return {
                ...state,
                continents: state.continents.map((continent) => {
                    if(continent.code === action.payload.code) {
                        return {
                            ...continent,
                            population: action.payload.population,
                        }
                    }
                    return continent
                })
            }
        case 'remplirData':
            return {
                ...state,
                continents: action.payload
            }
        
        default: return state
    }
}


const store = createStore(reducer);

export default store;