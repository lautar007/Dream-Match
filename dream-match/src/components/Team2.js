import React from "react";
import escudo from './media/escudo.png';
import './styles/Equipo.css';
import player from './media/player.png';
import { Link } from "react-router-dom";

export default function Team1(){

    

    return(
        <div>
            <div className="content-team">
                <img className="escudo1" src={escudo}/>
                <h1 className="titulo1">Equipo dos</h1>
                <Link className="link" to='/teams'>
                <button className="back">Volver</button>
                </Link>
            </div>
            <div className="content-players">
                <div className="content-player">
                    <img className="photo" src={player}/>
                    <h2 className="nombre-P">-- Jugador 1 --</h2>
                    <h2 className="nombre-P">-- Posición --</h2>
                    <Link className="link" to='/clubs'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img className="photo" src={player}/>
                    <h2 className="nombre-P">-- Jugador 2 --</h2>
                    <h2 className="nombre-P">-- Posición --</h2>
                    <Link className="link" to='/clubs'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img className="photo" src={player}/>
                    <h2 className="nombre-P">-- Jugador 3 --</h2>
                    <h2 className="nombre-P">-- Posición --</h2>
                    <Link className="link" to='/clubs'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img className="photo" src={player}/>
                    <h2 className="nombre-P">-- Jugador 4 --</h2>
                    <h2 className="nombre-P">-- Posición --</h2>
                    <Link className="link" to='/clubs'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img className="photo" src={player}/>
                    <h2 className="nombre-P">-- Jugador 5 --</h2>
                    <h2 className="nombre-P">-- Posición --</h2>
                    <Link className="link" to='/clubs'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}