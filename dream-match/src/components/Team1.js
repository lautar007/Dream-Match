import React from "react";
import escudo from './media/escudo.png';
import './styles/Equipo.css';
import player from './media/player.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editor from './media/edit.png';
import { editName1, Reboot1, save1,} from "../actions/actions";

export default function Team1(){

    const dispatch = useDispatch();
    const nombre = useSelector((state)=>state.Nombre1);
    const jugadores = useSelector((state)=>state.jugadores);
    const save = useSelector((state)=>state.Save1);
    const jugadores1 = [jugadores[0],jugadores[1],jugadores[2],jugadores[3],jugadores[4]];
    const list = jugadores1.map(j=> j.nombre);
    const [edit, setEdit] = useState('false');
    const [input, setInput] = useState('');

    console.log(jugadores1);

    function handleEdit(e){
        e.preventDefault();
        setEdit(!edit);
    }

    function handleInput(e){
        if(e.keyCode === 13){
            e.preventDefault();
            console.log(e.target.value)
            dispatch(editName1(e.target.value))
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
        dispatch(editName1(e.target.value))
        setEdit(!edit);
    }

    function handleSave(e){
        e.preventDefault();
        dispatch(save1());
        alert('Equipo 1 Guardado')
    }

    function handleReboot(e){
        e.preventDefault();
        dispatch(Reboot1())
    }

    function contentSave(){
        if(nombre === 'Equipo uno' 
        || list[0] === 'jugador 1' 
        || list[1] === 'jugador 2'
        || list[2] === 'jugador 3'
        || list[3] === 'jugador 4'
        || list[4] === 'jugador 5'){
         return null
        }
        else{
            return(
                <div className="complete-team">
                    <h1 className="complete">El Equipo 1 está completo</h1>
                    <button onClick={(e)=> handleReboot(e)}>Reiniciar Equipo</button>
                    {
                        save === false ?
                       <button onClick={(e)=> handleSave(e)}>Guardar Equipo</button>
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
                <button className="back1">Volver</button>
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
                jugadores1.map((j)=>{
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