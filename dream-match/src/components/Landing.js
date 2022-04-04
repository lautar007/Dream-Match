import React from "react";
import './styles/Landing.css';
import ball from './media/ball.png';
import CurArr1 from './media/curve arrow 1.png';
import ex from './media/ex.png';
import { Link } from "react-router-dom";

export default function Landing(){

    return(
        <div className="fondo">
            <div className="content">
                <div className="border">
                    <img alt="ball" className="ball" src={ball}/>
                    <img alt="curArr1" className="curArr1" src={CurArr1}/>
                    <img alt="curArr2" className="curArr2" src={CurArr1}/>
                    <img alt="ex" className="ex" src={ex}/>
                    <h1 className="titulo">Dream Teams</h1>
                    <div className="cuadro">
                    <h2 className="subtitulo">EL PARTIDO DE TUS SUEÑOS</h2>
                    <h2 className="text">Crea dos equipos de fútbol con tus jugadores favoritos</h2>
                </div>
                <Link to='/teams'>
                <button className="enter">Entrar</button>
                </Link>
            </div>
        </div>
            <div className="img">
            </div>
        </div>
    )
}