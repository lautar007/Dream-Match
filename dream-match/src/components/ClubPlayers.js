import React from "react";
import { useParams } from "react-router-dom";

export default function ClubPlayers(){

    let {club} = useParams();

    console.log(club)

    return(
        <div>
            <h1>Aquí se verán los jugadores del equipo {club}</h1>
        </div>
    )
}