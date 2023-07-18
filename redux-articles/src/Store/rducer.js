import { create_post, update_post, delete_post } from "./actionTypes";

const initialState ={
    posts:[],
    nextId:1
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case create_post:
            const newPost= { ...action.payload, id: state.nextId };
            return {
                ...state,
                articles:[...state.posts,newPost],
                nextId:state.nextId+1
            }
        
        case update_post:
            return{
                ...state,
                posts: state.posts.map(item =>
                  item.id === action.payload.id ? action.payload : item
                )
              };
        case delete_post:
            return{
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
              };

        default:
            return state    
    }
}

export default reducer