const initialState = {
    users: [
        {id: 1, name: 'Mohamed Allaoui', email: 'mohamed@allaoui.com'},
        {id: 2, name: 'Hind Bennani', email: 'Hind@Bennani.com'},
        {id: 3, name: "Argane Mohamed", email: 'argane@amlou.com'}
    ]
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case "UPDATE_USER":
            const {id, name, email} = action.payload;
            const existingUser = state.users.find((user)=> user.id === parseInt(id));
            if (existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
            return state

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