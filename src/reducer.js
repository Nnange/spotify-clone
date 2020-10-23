export const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item: null,
     token: "BQBHrkRk8wUO90XbkyNG2m-6CVIJMB5dPnNhdHuw9fF0Mkz14B0GkhawT1w1VM_CO6m7xkhktQGmZEQMP03UMsVSYluqKFnXINTnpd2lx5YdxkJP3ckx8uVWkRjvmlytJrPLtjGN_Y2kd_99iPTxPGEZvVBkvwlr454ZVrkSMlrA_bwZepCP",
    playlists: null
}



const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {

    case 'SET_USER':
        return { 
            ...state, 
            user: action.user 
        }
        case 'SET_TOKEN':
            return { 
                ...state, 
                token: action.token 
            }
        case 'SET_PLAYLISTS':
            return { 
                ...state, 
                playlists: action.playlists 
            }

    default:
        return state
    }
}

export default reducer;
