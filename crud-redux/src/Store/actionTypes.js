export const add = (user)=>{
    return{
        type: 'ADD_USER',
        payload: user
    }
}
export const filterUser = (idVille)=>{
    return{
        type: "FILTER_USER",
        payload: idVille
    }
}
export const clearFilter = ()=>{
    return{
        type: 'CLEAR_FILTER'
    }
}
export const updateUser = (user)=>{
    return{
        type: 'UPDATE_USER',
        payload: user
    }
}
export const deleteUser = (idUser)=>{
    return{
        type: 'DELETE_USER',
        payload: idUser
    }
}
