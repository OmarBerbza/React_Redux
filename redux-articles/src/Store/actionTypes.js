export const create_post = 'create';
export const update_post = 'update';
export const delete_post = 'delete';

export const create =(data) =>{
        return{
            type: create_post,
            payload: data
        }
    }

export const update = (data)=>{
    return{
        type: update_post,
        payload: data
    }
}

export const delete_p=(id)=>{
    return {
        type: delete_post,
        payload:id
    }
}