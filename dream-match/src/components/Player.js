import React from "react";
import { useParams } from "react-router-dom";

export default function Player(){

    const {id} = useParams();

    console.log(id);

    return(
        <div>
            <h1>Aquí se verá el detalle del jugador {id}</h1>
        </div>
    )
}