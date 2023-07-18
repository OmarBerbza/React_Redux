import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchContinents = createAsyncThunk('fetchContinents', async () => {
    const {data} = await axios.get("https://fakeapi.com/continents")
    return data
})

const continentSlice = createSlice({
    name: 'continents',
    initialState: {

        data : [
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
    },
    reducers: {
        ajouterPays: (state, action) => {
            state.data = state.data.map((continent)  => {
                if(continent.code === action.payload.continentCode){
                    return {
                        ...continent,
                        pays: [
                            ...continent.pays,
                            action.payload.pays
                        ],
                    }
                }
                return continent;
            })
        },
        modifierPopulation: (state, action) => {
            state.data = state.data.map((continent) => {
                if(continent.code === action.payload.code){
                    return {
                        ...continent,
                        population: action.payload.population,
                    }
                }
                return continent
            })
        }
    },
    extraReducers: {
        [fetchContinents.fulfilled] : (state, action) => {
            state.data = action.payload
        }
    }
})

export const { ajouterPays, modifierPopulation } = continentSlice.actions;
export default continentSlice.reducer;