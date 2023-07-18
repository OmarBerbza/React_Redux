import { configureStore } from '@reduxjs/toolkit'
import continentStore from './slices/continentSlice'

const store = configureStore({
    reducer: {
        continents: continentStore,
    }
})

export default store