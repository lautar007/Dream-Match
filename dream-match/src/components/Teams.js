import React from "react";
import './styles/Teams.css'
import arrow from './media/arrow.png';
import ex from './media/ex.png';
import escudo2 from './media/escudo2.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Teams(){

    const nombre1 = useSelector((state)=>state.Nombre1);
    const nombre2 = useSelector((state)=>state.Nombre2);
    const save1 = useSelector((state)=>state.Save1);
    const save2 = useSelector((state)=>state.Save2);
    const jugadores = useSelector((state)=>state.jugadores);
    const jugadores1 = [jugadores[0],jugadores[1],jugadores[2],jugadores[3],jugadores[4]]
    const jugadores2 = [jugadores[5],jugadores[6],jugadores[7],jugadores[8],jugadores[9]]

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
                            {
                                jugadores1.map(j=>{
                                    return (
                                        <div className="lista-players">
                                            <img src={j.img}/>
                                            <h2>-- {j.nombre}</h2>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                    }
                    <Link to='/team1'>
                    <button className="enter">Definir Jugadores</button>
                    </Link>
                </div>
                <h1 className="versus">VS.</h1>
                <div className="teamCard">
                    <h1 className="teamName">{nombre2}</h1>
                    {
                        save2 === false ?
                        <img alt="escudo" className="escudo" src={escudo2}/>
                        :
                        <div>
                            {
                                jugadores2.map(j=>{
                                    return (
                                        <div className="lista-players">
                                            <img src={j.img}/>
                                            <h2>-- {j.nombre}</h2>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                    }
                    <Link to='/team2'>
                    <button className="enter">Definir Jugadores</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}