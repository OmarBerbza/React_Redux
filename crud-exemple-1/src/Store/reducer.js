const inicialState = {
    cities: [
        {id: 1, vill: 'Choise The City'},
        {id: 2, vill: 'Agadir'},
        {id: 3, vill: 'Tiznit'},
        {id: 4, vill: 'Rabat'},
        {id: 5, vill: 'Tanger'},
        {id: 6, vill: 'Casablanca'}
    ],
    users : [
        {id: 1, name: 'Omar BERBZA', email: 'omar@berbza.com', password: '1234', city: 2},
        {id: 2, name: 'Lahcen ES-SOUFIANI', email: 'lahcen@essofiani.com', password: '5678', city: 3},
        {id: 3, name: 'Anouar BOUTOGA', email: 'anouar@boutoga.com', password: '4321', city: 2}
    ] 
}
const reducer = (state = inicialState, action)=>{
    switch (action.type){
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "MODIFY_USER":
            // const user = state.users.find((u)=> u.id === parseInt(action.payload.id));
            // if(user){
            //     user.name = action.payload.name;
            //     user.email = action.payload.email;
            //     user.password = action.payload.password;
            //     user.city = action.payload.city;
            // }
            // return state
            return{
                ...state, 
                users: state.users.map((user) => user.id === action.payload.id ? action.payload : user)
            }

        case "DELETE_USER":
            return{
                ...state,
                users: [...state.users.filter((u)=> u.id !== parseInt(action.payload))]
            }
        case "FILTER_USER":
            return{
                ...state,
                filteredUsers: state.users.filter((u)=> u.city === parseInt(action.payload))
            }
        case "CLEAR_USER":
            return{
                ...state,
                usersFilter: null
            }
        default:
            return state
    }
}

export default reducer