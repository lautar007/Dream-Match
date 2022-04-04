import React from "react";
import { Link } from "react-router-dom";
import './styles/League.css';

export default function Leagues (){


    return(
        <div>
            <div className="tituloLiga">
            <h1 className="titulo">Selecciona una Liga</h1>
            <button className="botonback" onClick={(e) => window.history.back(e)}>Volver al equipo</button>
            </div>
            <div className="Ligas">
                <Link className="link" to='/clubs/UEFA European League'>
                <div className="liga">
                    <img src="https://i.pinimg.com/564x/a2/a7/6e/a2a76e99e45391ccb7c0716ac98125c6.jpg"/>
                    <h2>UEFA European League</h2>
                </div>
                </Link>

                <Link className="link" to='/clubs/UEFA Champions League'>
                <div className="liga">
                    <img src="https://i.pinimg.com/564x/79/94/5d/79945d015aaf799a3a395ff0e13cde54.jpg"/>
                    <h2>UEFA Champions League</h2>
                </div>
                </Link>
                
                <Link className="link" to='/clubs/Copa Sudamericana'>
                <div className="liga">
                    <img src="https://d2soj90bepqxla.cloudfront.net/wp-content/uploads/2020/10/sudar_0_4.jpg"/>
                    <h2>Copa Sudamericana</h2>
                </div>
                </Link>

                <Link className="link" to='/clubs/Copa Argentina'>
                <div className="liga">
                    <img src="https://img.planetafobal.com/2021/12/copa-argentina-afa-nuevo-logo-2022-ds.jpg"/>
                    <h2>Copa Argentina</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}