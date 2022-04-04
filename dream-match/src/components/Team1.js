import React from "react";
import escudo from './media/escudo.png';
import './styles/Equipo.css';
import player from './media/player.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editor from './media/edit.png';
import { editName1 } from "../actions/actions";

export default function Team1(){

    const dispatch = useDispatch();
    const nombre = useSelector((state)=>state.Nombre1);
    const jugador1 = useSelector((state)=>state.jugador11);
    const jugador2 = useSelector((state)=>state.jugador12);
    const jugador3 = useSelector((state)=>state.jugador13);
    const jugador4 = useSelector((state)=>state.jugador14);
    const jugador5 = useSelector((state)=>state.jugador15);
    const [edit, setEdit] = useState('false')

    console.log(nombre);

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
                <div className="content-player">
                    <img alt="foto" className="photo" src={player}/>
                    <h2 className="nombre-P">- {jugador1[0]} -</h2>
                    <h2 className="nombre-P">- {jugador1[1]} -</h2>
                    <Link className="link" to='/leagues'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img alt="foto" className="photo" src={player}/>
                    <h2 className="nombre-P">- {jugador2[0]} -</h2>
                    <h2 className="nombre-P">- {jugador2[1]} -</h2>
                    <Link className="link" to='/leagues'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img alt="foto" className="photo" src={player}/>
                    <h2 className="nombre-P">- {jugador3[0]} -</h2>
                    <h2 className="nombre-P">- {jugador3[1]} -</h2>
                    <Link className="link" to='/leagues'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img alt="foto" className="photo" src={player}/>
                    <h2 className="nombre-P">- {jugador4[0]} -</h2>
                    <h2 className="nombre-P">- {jugador4[1]} -</h2>
                    <Link className="link" to='/leagues'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
                <div className="content-player">
                    <img alt="foto" className="photo" src={player}/>
                    <h2 className="nombre-P">- {jugador5[0]} -</h2>
                    <h2 className="nombre-P">- {jugador5[1]} -</h2>
                    <Link className="link" to='/leagues'>
                    <button className="enter1">Editar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}