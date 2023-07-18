export const add = (user)=>{
    return{
        type: "ADD_USER",
        payload : user
    }
}
export const modify = (user)=> {
    return{
        type: "MODIFY_USER",
        payload: user
    }
}
export const delet = (idUser)=>{
    return{
        type: "DELETE_USER",
        payload: idUser
    }
}
export const filter = (idCity)=>{
    return{
        type: "FILTER_USER",
        payload: idCity
    }
}
export const clear = ()=>{
    return{
        type: "CLEAR_USER"
    }
}