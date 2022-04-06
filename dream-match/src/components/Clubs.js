import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Clubs(){

    let {league, edit} = useParams();

    const european = [
        {nombre:'Atalanta' ,img:'https://apiv3.apifootball.com/badges/85_atalanta.jpg', id:85},                    {nombre:'Lyon' ,img:'https://apiv3.apifootball.com/badges/3815_lyon.jpg' , id:3815},
        {nombre:'Barcelona' ,img:'https://apiv3.apifootball.com/badges/97_barcelona.jpg' , id:97},                 {nombre:'Monaco' ,img:'https://apiv3.apifootball.com/badges/3817_monaco.jpg' , id:3817},
        {nombre:'Betis' ,img:'https://apiv3.apifootball.com/badges/7261_real-betis.jpg' , id:7261},                {nombre:'Porto' ,img:'https://apiv3.apifootball.com/badges/81_porto.jpg' , id:81},
        {nombre:'Braga' ,img:'https://apiv3.apifootball.com/badges/156_sporting-braga.jpg' , id:156},              {nombre:'Rangers' ,img:'https://apiv3.apifootball.com/badges/146_rangers.jpg' , id:146},
        {nombre:'Frankfurt' ,img:'https://apiv3.apifootball.com/badges/3945_eintracht-frankfurt.jpg' , id:3945},   {nombre:'Red Star' ,img:'https://apiv3.apifootball.com/badges/112_red-star-belgrade.jpg' , id:112},
        {nombre:'Galatasaray' ,img:'https://apiv3.apifootball.com/badges/192_galatasaray.jpg' , id:192},           {nombre:'Sevilla' ,img:'https://apiv3.apifootball.com/badges/89_sevilla.jpg' , id:89},
        {nombre:'Leipzig' ,img:'https://apiv3.apifootball.com/badges/101_rb-leipzig.jpg' , id:101},                {nombre:'Spartak Moscow' ,img:'https://apiv3.apifootball.com/badges/6287_spartak-moscow.jpg' , id:6287},
        {nombre:'Leverkusen' ,img:'https://apiv3.apifootball.com/badges/143_bayer-leverkusen.jpg' , id:143},       {nombre:'West Ham' ,img:'https://apiv3.apifootball.com/badges/3081_west-ham-united.jpg' , id:3081}
    ];
    const champions = [
        {nombre:'Ajax' ,img:'https://apiv3.apifootball.com/badges/86_ajax.jpg' , id:86},                        {nombre:'Liverpool' ,img:'https://apiv3.apifootball.com/badges/84_liverpool.jpg' , id:84},
        {nombre:'Atlético Madrid' ,img:'https://apiv3.apifootball.com/badges/73_atletico-madrid.jpg' , id:73},  {nombre:'Manchester City' ,img:'https://apiv3.apifootball.com/badges/80_manchester-city.jpg' , id:80},
        {nombre:'Bayern Munich' ,img:'https://apiv3.apifootball.com/badges/72_bayern-munich.jpg' , id:72},      {nombre:'Manchester United' ,img:'https://apiv3.apifootball.com/badges/102_manchester-united.jpg' , id:102},
        {nombre:'Benfica' ,img:'https://apiv3.apifootball.com/badges/147_benfica.jpg' , id:147},                {nombre:'PSG' ,img:'https://apiv3.apifootball.com/badges/100_psg.jpg' , id:100},
        {nombre:'Chelsea' ,img:'https://apiv3.apifootball.com/badges/88_chelsea.jpg' , id:88},                  {nombre:'Real Madrid' ,img:'https://apiv3.apifootball.com/badges/76_real-madrid.jpg' , id:76},
        {nombre:'Inter Milan' ,img:'https://apiv3.apifootball.com/badges/79_inter-milan.jpg' , id:79},          {nombre:'Salzburg' ,img:'https://apiv3.apifootball.com/badges/74_salzburg.jpg' , id:74},
        {nombre:'Juventus' ,img:'https://apiv3.apifootball.com/badges/96_juventus.jpg' , id:96},                {nombre:'Sporting Lisbon' ,img:'https://apiv3.apifootball.com/badges/177_sporting-lisbon.jpg' , id:177},
        {nombre:'Lille' ,img:'https://apiv3.apifootball.com/badges/160_lille.jpg' , id:160},                    {nombre:'Villarreal' ,img:'https://apiv3.apifootball.com/badges/162_villarreal.jpg' , id:162}
    ];
    const sudamericana = [
        {nombre:'América de Cali' ,img:'https://apiv3.apifootball.com/badges/561_america-de-cali.jpg' , id:561},              {nombre:'LDU Quito' ,img:'https://apiv3.apifootball.com/badges/555_ldu-quito.jpg' , id:555},
        {nombre:'Arsenal' ,img:'https://apiv3.apifootball.com/badges/997_arsenal.jpg' , id:997},                              {nombre:'Libertad' ,img:'https://apiv3.apifootball.com/badges/571_libertad.jpg' , id:571},
        {nombre:'Atlético Paranaense' ,img:'https://apiv3.apifootball.com/badges/551_athletico-paranaense.jpg' , id:551},     {nombre:'Nacional' ,img:'https://apiv3.apifootball.com/badges/562_nacional.jpg' , id:562},
        {nombre:'Deportivo Táchira' ,img:'https://apiv3.apifootball.com/badges/8031_deportivo-tachira.jpg' , id:8031},        {nombre:'Peñarol' ,img:'https://apiv3.apifootball.com/badges/552_penarol.jpg' , id:552},
        {nombre:'Grêmio"' ,img:'https://apiv3.apifootball.com/badges/558_gremio.jpg' , id:558},                               {nombre:'RB Bragantino' ,img:'https://apiv3.apifootball.com/badges/2015_rb-bragantino.jpg' , id:2015},
        {nombre:'Independiente' ,img:'https://apiv3.apifootball.com/badges/999_independiente.jpg' , id:999},                  {nombre:'Rosario Central' ,img:'https://apiv3.apifootball.com/badges/992_rosario-central.jpg' , id:992},
        {nombre:'Independiente del Valle' ,img:'https://apiv3.apifootball.com/badges/543_independiente-valle.jpg' , id:543},  {nombre:'Santos' ,img:'https://apiv3.apifootball.com/badges/566_santos.jpg', id:566},
        {nombre:'Junior' ,img:'https://apiv3.apifootball.com/badges/544_junior.jpg' , id:544},                                {nombre:'Sporting Cristal' ,img:'https://apiv3.apifootball.com/badges/5748_sporting-cristal.jpg' , id:5748}
    ];
    const argentina = [
        {nombre:'Argentinos Juniors' ,img:'https://apiv3.apifootball.com/badges/995_argentinos-juniors.jpg' , id:995},  {nombre:'Racing' ,img:'https://apiv3.apifootball.com/badges/563_racing-club.jpg' , id:563},
        {nombre:'Banfield' ,img:'https://apiv3.apifootball.com/badges/991_banfield.jpg' , id:991},                      {nombre:'River Plate' ,img:'https://apiv3.apifootball.com/badges/554_river-plate.jpg' , id:554},
        {nombre:'Boca Juniors' ,img:'https://apiv3.apifootball.com/badges/570_boca-juniors.jpg' , id:570},              {nombre:'San Telmo' ,img:'https://apiv3.apifootball.com/badges/944_san-telmo.jpg' , id:944},
        {nombre:'Defensa y Justicia' ,img:'https://apiv3.apifootball.com/badges/568_defensa-y-justicia.jpg' , id:568},  {nombre:'Sarmiento' ,img:'https://apiv3.apifootball.com/badges/1005_sarmiento.jpg' , id:1005},
        {nombre:'Estudiantes' ,img:'https://apiv3.apifootball.com/badges/932_estudiantes-rio-cuarto.jpg' , id:932},     {nombre:'Talleres' ,img:'https://apiv3.apifootball.com/badges/1003_talleres-de-cordoba.jpg' , id:1003},
        {nombre:'Gimnasia y Esgrima' ,img:'https://apiv3.apifootball.com/badges/1002_gimnasia-la-plata.jpg' , id:1002}, {nombre:'Temperley' ,img:'https://apiv3.apifootball.com/badges/929_temperley.jpg' , id:929},
        {nombre:'Godoy Cruz' ,img:'https://apiv3.apifootball.com/badges/994_godoy-cruz.jpg' , id:994},                  {nombre:'Tigre' ,img:'https://apiv3.apifootball.com/badges/549_tigre.jpg' , id:549},
        {nombre:'Patronato' ,img:'https://apiv3.apifootball.com/badges/1008_patronato.jpg' , id:1008},                  {nombre:'Villa San Carlos' ,img:'https://apiv3.apifootball.com/badges/924_villa-san-carlos.jpg' , id:924}
    ];

    function showTeams(){
        if(league === 'UEFA European League'){
            return (
                <div className="Equipos">
                   {
                       european.map((team)=>{
                           return(
                            <Link className="link" to={'/clubPlayers/' + team.id + '/' + edit}>
                            <div className="equipo">
                                <img src = {team.img}/>
                                <h2>{team.nombre}</h2>
                            </div>
                            </Link>
                           )
                       })
                   }
                </div>
            )
        }
        if(league === 'UEFA Champions League'){
            return (
                <div className="Equipos">
                   {
                       champions.map((team)=>{
                           return(
                            <Link className="link" to={'/clubPlayers/' + team.id + '/' + edit}>
                            <div className="equipo">
                                <img src = {team.img}/>
                                <h2>{team.nombre}</h2>
                            </div>
                            </Link>
                           )
                       })
                   }
                </div>
            )
        }
        if(league === 'Copa Sudamericana'){
            return (
                <div className="Equipos">
                   {
                       sudamericana.map((team)=>{
                           return(
                            <Link className="link" to={'/clubPlayers/' + team.id + '/' + edit}>
                            <div className="equipo">
                                <img src = {team.img}/>
                                <h2>{team.nombre}</h2>
                            </div>
                            </Link>
                           )
                       })
                   }
                </div>
            )
        }
        if(league === 'Copa Argentina'){
            return (
                <div className="Equipos">
                   {
                       argentina.map((team)=>{
                           return(
                            <Link className="link" to={'/clubPlayers/' + team.id + '/' + edit}>
                            <div className="equipo">
                                <img src = {team.img}/>
                                <h2>{team.nombre}</h2>
                            </div>
                            </Link>
                           )
                       })
                   }
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1 className="error-liga">Esta liga no es seleccionable, vuelve a la sección de Ligas para seleccionar una.</h1>
                </div>
            )
        }
    }

    return(
        <div>
            <div className="tituloLiga">
            <button className="botonback" onClick={(e)=> window.history.back(e)}>Volver a Ligas</button>
            <h1 className="titulo">{league} </h1>
            </div>
            {
                showTeams()
            }
        </div>
    )
}