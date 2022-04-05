
const initialState = {
    Plantel:[],

    
    jugadores:[ {id:11, nombre: 'jugador 1', posición: 'posición', img: ''},
     {id:12, nombre: 'jugador 2', posición: 'posición', img: ''},
     {id:13, nombre: 'jugador 3', posición: 'posición', img: ''},
     {id:14, nombre: 'jugador 4', posición: 'posición', img: ''},
     {id:15, nombre: 'jugador 5', posición: 'posición', img: ''},
     {id:21, nombre: 'jugador 1', posición: 'posición', img: ''},
     {id:22, nombre: 'jugador 2', posición: 'posición', img: ''},
     {id:23, nombre: 'jugador 3', posición: 'posición', img: ''},
     {id:24, nombre: 'jugador 4', posición: 'posición', img: ''},
     {id:25, nombre: 'jugador 5', posición: 'posición', img: ''},
    ],

    Nombre1: 'Equipo uno',
    Save1: false,

    Nombre2: 'Equipo dos',
    Save2: false
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'EDIT_NAME1':
            return{
                ...state,
                Nombre1: action.payload
            }
        case 'EDIT_NAME2':
            return{
                ...state,
                Nombre2: action.payload
            }
        case 'GET_PLANTEL':
            return{
                ...state,
                Plantel: action.payload[0]
            }
        case 'PUT_PLAYER':
                console.log(action.id);
                return{
                    ...state,
                    jugadores: state.jugadores.map(j=>{
                        if(j.id === parseInt(action.id)){
                            return {...j,
                                nombre: action.player,
                                posición: action.position,
                                img: action.img
                            }
                        }
                        return{
                            ...j,
                          
                        }
                    })

                }
        case 'SAVE1':
            return{
                ...state,
                Save1: true
            } 
        case 'SAVE2':
            return{
                ...state,
                Save2: true
            } 
        case 'REBOOT1':
            var num = 0;
            return{
                ...state,
                Nombre1: 'Equipo uno',
                Save1: false,
                jugadores: state.jugadores.map(j=>{
                    num++;
                    if(j.id === 11 || 12 || 13 || 14 || 15){
                        return{
                            ...j,
                            nombre: `jugador ${num}`,
                            posición: 'posición',
                            img:''
                        }
                    }
                    return{
                        ...j
                    }
                })
            }
        case 'REBOOT2':
            var nume = 0;
            return{
                ...state,
                Nombre1: 'Equipo uno',
                Save1: false,
                jugadores: state.jugadores.map(j=>{
                    nume++;
                    if(j.id === 21 || 22 || 23 || 24 || 25){
                        return{
                            ...j,
                            nombre: `jugador ${num}`,
                            posición: 'posición',
                            img:''
                        }
                    }
                    return{
                        ...j
                    }
                })
            }
        default:
            return state;
    }
}

export default rootReducer;