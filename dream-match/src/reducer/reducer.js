
const initialState = {
    Nombre1: 'Equipo uno',
    jugador11:['jugador 1', 'posición'],
    jugador12:['jugador 2', 'posición'],
    jugador13:['jugador 3', 'posición'],
    jugador14:['jugador 4', 'posición'],
    jugador15:['jugador 5', 'posición'],
    playerList1: [],
    Save1: false,
    Nombre2: 'Equipo dos',
    jugador21:['jugador 1', 'posición'],
    jugador22:['jugador 2', 'posición'],
    jugador23:['jugador 3', 'posición'],
    jugador24:['jugador 4', 'posición'],
    jugador25:['jugador 5', 'posición'],
    PlayerList2:[],
    Save2: false
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'EDIT_NAME1':
            return{
                ...state,
                Nombre1: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;