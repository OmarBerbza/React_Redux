const initial = {
    num: 0
}

function reducer(state = initial, action){
    switch (action.type){
        case 'Incrementer':
            return {num: state.num + 1}
            
        case 'Dicrementer':
            return{num: state.num - 1}
    }
    return state
}

export default reducer