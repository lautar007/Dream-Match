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
    const jugadores2 = [jugadores[5],jugadores[6],jugadores[7],jugadores[8],jugadores[9]]
    console.log(save);
    const [edit, setEdit] = useState('false')

    console.log(jugadores2);

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
        if(nombre !== 'Equipo uno'
        && jugadores2[0] !== 'jugador 1'
        && jugadores2[1] !== 'jugador 2'
        && jugadores2[2] !== 'jugador 3'
        && jugadores2[3] !== 'jugador 4'
        && jugadores2[4] !== 'jugador 5'){
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
                        />
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
            {
                contentSave()
            }
        </div>
    )
}