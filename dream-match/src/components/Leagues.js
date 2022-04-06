import React from "react";
import { Link, useParams } from "react-router-dom";
import './styles/League.css';

export default function Leagues (){

    const {edit} = useParams();
    console.log(edit)

    function backTeam(){
        if(edit[0] === '1'){ return '/team1'};
        if(edit[0] === '2'){ return '/team2'};
    }
    
    return(
        <div>
            <div className="tituloLiga">
            <Link className="link" to={backTeam()}>
            <button className="botonback">Volver al equipo</button>
            </Link>
            <h1>Selecciona una Liga</h1>
            </div>
            <div className="Ligas">
                <Link className="link" to={'/clubs/UEFA European League/' + edit}>
                <div className="liga">
                    <img src="https://i.pinimg.com/564x/a2/a7/6e/a2a76e99e45391ccb7c0716ac98125c6.jpg"/>
                    <h2>UEFA European League</h2>
                </div>
                </Link>

                <Link className="link" to={'/clubs/UEFA Champions League/' + edit}>
                <div className="liga">
                    <img src="https://i.pinimg.com/564x/79/94/5d/79945d015aaf799a3a395ff0e13cde54.jpg"/>
                    <h2>UEFA Champions League</h2>
                </div>
                </Link>
                
                <Link className="link" to={'/clubs/Copa Sudamericana/' + edit}>
                <div className="liga">
                    <img src="https://d2soj90bepqxla.cloudfront.net/wp-content/uploads/2020/10/sudar_0_4.jpg"/>
                    <h2>Copa Sudamericana</h2>
                </div>
                </Link>

                <Link className="link" to={'/clubs/Copa Argentina/' + edit}>
                <div className="liga">
                    <img src="https://img.planetafobal.com/2021/12/copa-argentina-afa-nuevo-logo-2022-ds.jpg"/>
                    <h2>Copa Argentina</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}