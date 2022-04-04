import React from "react";
import './styles/Teams.css'
import arrow from './media/arrow.png';
import ex from './media/ex.png';
import escudo2 from './media/escudo2.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Teams(){

    const nombre1 = useSelector((state)=>state.Nombre1);
    const jugador1 = useSelector((state)=>state.jugador11);
    const jugador2 = useSelector((state)=>state.jugador12);
    const jugador3 = useSelector((state)=>state.jugador13);
    const jugador4 = useSelector((state)=>state.jugador14);
    const jugador5 = useSelector((state)=>state.jugador15);
    const save1 = useSelector((state)=>state.Save1);

    return(
        <div>
            <img alt="arrow1" className="arrow1" src={arrow}/>
            <img alt="arrow2" className="arrow2" src={arrow}/>
            <img alt="ex1" className="ex1" src={ex}/>
            <img alt="x2" className="ex2" src={ex}/>
            <h1 className="titulo">Equipos</h1>
            <div className="content-teams">
                <div className="teamCard">
                    <h1 className="teamName">{nombre1}</h1>
                    {
                        save1 === false ?
                        <img alt="escudo" className="escudo" src={escudo2}/>
                        :
                        <div>
                            <h1>Div de jugadores</h1>
                        </div>
                    }
                    <Link to='/team1'>
                    <button className="enter">Definir Jugadores</button>
                    </Link>
                </div>
                <h1 className="versus">VS.</h1>
                <div className="teamCard">
                    <h1 className="teamName">Equipo 2</h1>
                    <img alt="escudo" className="escudo" src={escudo2}/>
                    <Link to='/team2'>
                    <button className="enter">Definir Jugadores</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}