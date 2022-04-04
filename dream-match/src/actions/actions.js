import axios from 'axios';

export function editName1(name){
    return ({
        type: 'EDIT_NAME1',
        payload: name
    })
}

export function getPlantel(club){
    return async function(dispatch){
        var json = await axios.get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${club}&APIkey=b7f58e3214206343c8c459ab4567ce8f65a6f4a10a9bb75f6ff480126dde0a0e`);
        return dispatch({
            type: 'GET_PLANTEL',
            payload: json.data
        })
    }
}

export function putPlayer(id, player, position, img){
    console.log(player)
    return ({
        type: 'PUT_PLAYER',
        id:id,
        player: player,
        position: position,
        img: img,
    })
}