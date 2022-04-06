import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlantel, putPlayer } from "../actions/actions";
import './styles/ClubPlayers.css';


export default function ClubPlayers(){

    const dispatch = useDispatch();
    const {club, edit} = useParams();

    useEffect(()=>{
        dispatch(getPlantel(club));
    },[dispatch]);

    const plantel = useSelector((state)=> state.Plantel);
    const jugadores = useSelector((state)=> state.jugadores.map(j => j.nombre));
    console.log(plantel);
    console.log(jugadores)

    

    const [loading, setLoading] = useState(true);

    setTimeout(function(){
        if(plantel.team_name){
        setLoading(false);
        }
    }, 2000);

    function translate(type){
        if(type === 'Goalkeepers'){
            return 'Arquero';
        }
        if(type === 'Defenders'){
            return 'Defensor';
        }
        if(type === 'Midfielders'){
            return 'Mediocampista';
        }
        if(type === 'Forwards'){
            return 'Delantero'
        }
        else return type
    }

    function handleSelect(e){
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(e.target.id)
        if(jugadores.includes(e.target.name)){
            return alert('Este jugador ya ha sido seleccionado para un puesto. Por favor, elije otro')
        }
        else{
        dispatch(putPlayer(edit, e.target.name, e.target.value, e.target.id));
        alert(`${e.target.name} fue seleccionado como 'Jugador ${edit[1]}'`)
        }
    }

    function backTeam(){
        if(edit[0] === '1'){ return '/team1'};
        if(edit[0] === '2'){ return '/team2'};
    }


    return(
        <div>
            {
                loading === true ?
                <div>
                    <h1 className="titulo">Cargando...</h1>
                </div>
                :
                <div>
                    <div className="content-team">
                        <img alt="escudo2" className="escudo2" src={plantel.team_badge}/>
                        <h1 className="titulo1">{plantel.team_name}</h1>
                        <button className="volver1" onClick={(e)=> window.history.back(e)}>Volver</button>
                        <Link className="link" to={backTeam()}>
                        <button className="back1">Equipo {edit[0]}</button>
                        </Link>
                    </div>
                    {
                      plantel.players.map((j)=>{
                        return(
                            <div className="content-player">
                                <img alt="foto no disponible" className="photo" src={j.player_image}/>
                                <h2 className="nombre-P">- {j.player_name}</h2>
                                <h2 className="nombre-P1">- {translate(j.player_type)}</h2>
                                <button 
                                className="enter1" 
                                onClick={(e)=> handleSelect(e)} 
                                value={translate(j.player_type)}
                                id = {j.player_image}
                                name={j.player_name} 
                                >seleccionar</button>
                            </div>
                        )
                      })
                    }
                </div>
            }
        </div>
    )
}