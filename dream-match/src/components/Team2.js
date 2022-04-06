import React from "react";
import escudo from './media/escudo.png';
import './styles/Equipo.css';
import player from './media/player.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editor from './media/edit.png';
import { editName2, Reboot2, save2 } from "../actions/actions";

export default function Team1(){

    const dispatch = useDispatch();
    const nombre = useSelector((state)=>state.Nombre2);
    const jugadores = useSelector((state)=>state.jugadores);
    const save = useSelector((state)=>state.Save2);
    const jugadores2 = [jugadores[5],jugadores[6],jugadores[7],jugadores[8],jugadores[9]];
    const list = jugadores2.map(j=> j.nombre);
    console.log(save);
    const [edit, setEdit] = useState('false');
    const [input, setInput] = useState('');

    console.log(list);

    function handleEdit(e){
        e.preventDefault();
        setEdit(!edit);
    }

    function handleInput(e){
        if(e.keyCode === 13){
            e.preventDefault();
            console.log('funciona');
            console.log(e.target.value)
            dispatch(editName2(e.target.value))
            setEdit(!edit);
        }
    }

    function handleInputChange(e){
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleInput1(e){
        e.preventDefault();
        console.log(e.target.value)
        dispatch(editName2(e.target.value))
        setEdit(!edit);
    }


    function handleSave(e){
        e.preventDefault();
        dispatch(save2());
        alert('Equipo 2 Guardado')
    }

    function handleReboot(e){
        e.preventDefault();
        dispatch(Reboot2());
    }

    function contentSave(){
        if(nombre === 'Equipo dos' 
        || list[0] === 'jugador 6' 
        || list[1] === 'jugador 7'
        || list[2] === 'jugador 8'
        || list[3] === 'jugador 9'
        || list[4] === 'jugador 10'){
         return null
        }
        else{
            return(
                <div className="content-team">
                    <h1 className="complete">El Equipo 2 está completo</h1>
                    <button className="back" onClick={(e)=> handleReboot(e)}>Reiniciar Equipo</button>
                    {
                        save === false ?
                       <button className="back" onClick={(e)=> handleSave(e)}>Guardar Equipo</button>
                       :
                       null 
                    }
                </div>
            )
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
                    onChange = {(e)=>handleInputChange(e)}
                    />
                    <button className="done" value={input} onClick={(e)=>handleInput1(e)}>ok</button>
                    </div>
                    :
                    null
                }
            </div>
            <div className="content-players">
            {
                jugadores2.map((j)=>{
                    return(
                        <div className="content-player">
                            {
                                j.img !== '' ?
                                <img alt="foto" className="photo" src={j.img}/>
                                :
                                <img alt="foto" className="photo" src={player}/>
                            }
                        <h2 className="nombre-P">- {j.nombre}</h2>
                        <h2 className="nombre-P1">- {j.posición}</h2>
                        <Link className="link" to={'/leagues/' + j.id}>
                        <button className="enter1" name={j.nombre}>Editar</button>
                        </Link>
                    </div>
                    )
                })
            }
            </div>
            {
                contentSave()
            }
        </div>
    )
}