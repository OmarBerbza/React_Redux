export const addUser = (user)=>{
    return{
        type: 'ADD_USER',
        payload: user
    }
}
export const updateUserAction = (user)=>{
    return{
        type: 'UPDATE_USER',
        payload: user
    }
}
export const deleteUserAction = (idUser)=>{
    return{
        type: 'DELETE_USER',
        payload: idUser
    }
}