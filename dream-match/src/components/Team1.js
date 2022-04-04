import React from "react";
import escudo from './media/escudo.png';
import './styles/Equipo.css';
import player from './media/player.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editor from './media/edit.png';
import { editName1,} from "../actions/actions";

export default function Team1(){

    const dispatch = useDispatch();
    const nombre = useSelector((state)=>state.Nombre1);
    const jugadores = useSelector((state)=>state.jugadores);
    const jugadores1 = [jugadores[0],jugadores[1],jugadores[2],jugadores[3],jugadores[4]]
    console.log(jugadores1);
    const [edit, setEdit] = useState('false')

    console.log(jugadores1);

    function handleEdit(e){
        e.preventDefault();
        setEdit(!edit);
    }

    function handleInput(e){
        if(e.keyCode === 13){
            e.preventDefault();
            console.log('funciona');
            console.log(e.target.value)
            dispatch(editName1(e.target.value))
            setEdit(!edit);
        }
    }


    return(
        <div>
            <div className="content-team">
                <img alt="escudo1" className="escudo1" src={escudo}/>
                <h1 className="titulo1">{nombre}</h1>
                <img alt="editor" className="edit" src={editor} onClick={(e)=> handleEdit(e)}/>
                <Link className="link" to='/teams'>
                <button className="back">Volver</button>
                </Link>
                {
                    edit === true?
                    <div className="content-editName">
                        <input
                        className="editName"
                        onKeyDown={(e)=>handleInput(e)}
                        />
                    </div>
                    :
                    null
                }
            </div>
            <div className="content-players">
            {
                jugadores1.map((j)=>{
                    return(
                        <div className="content-player">
                            {
                                j.img != '' ?
                                <img alt="foto" className="photo" src={j.img}/>
                                :
                                <img alt="foto" className="photo" src={player}/>
                            }
                        <h2 className="nombre-P">- {j.nombre} -</h2>
                        <h2 className="nombre-P">- {j.posición} -</h2>
                        <Link className="link" to={'/leagues/' + j.id}>
                        <button className="enter1" name={j.nombre}>Editar</button>
                        </Link>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}