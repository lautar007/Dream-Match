import axios from 'axios';

export function editName1(name){
    return ({
        type: 'EDIT_NAME1',
        payload: name
    })
}