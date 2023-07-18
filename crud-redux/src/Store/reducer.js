const initialState = {
    villes: [
        {id: 1, vill: 'Choisir une ville'},
        {id: 2, vill: 'Agadir'},
        {id: 3, vill: 'Marakech'},
        {id: 4, vill: 'Rabat'},
        {id: 5, vill: 'Tanger'}
    ],
    users: [
        {id: 1, nom: 'Berbza', prenom: 'Omar', ville: 2},
        {id: 2, nom: 'Allaoui', prenom: 'Mohamed', ville: 4}
    ]
}
const reducer = (state = initialState, action)=>{ 
    switch(action.type){
        case "ADD_USER":
            return{
                ...state, 
                users: [...state.users, action.payload],
            }
        case "FILTER_USER":
            return{
                ...state,
                users: initialState.users.filter((u)=> u.ville === parseInt(action.payload))
            }
        case "CLEAR_FILTER":
            return{
                ...state,
                users: initialState.users
            }
        case "UPDATE_USER":
            const user = state.users.find((u)=> u.id === parseInt(action.payload.id));
            if(user){
                user.nom = action.payload.nom
                user.prenom = action.payload.prenom
                user.ville = action.payload.ville
            }
            return state;

        case "DELETE_USER":
            return{
                ...state,
                users: [...state.users.filter((u)=> u.id !== parseInt(action.payload))]
            }
        default:
            return state
    }
}

export default reducer