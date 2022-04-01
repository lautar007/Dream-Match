import React from "react";
import { useParams } from "react-router-dom";

export default function ClubPlayers(){

    let {id} = useParams();

    console.log(id)

    return(
        <div>
            <h1>Aquí se verán los jugadores del equipo {id}</h1>
        </div>
    )
}