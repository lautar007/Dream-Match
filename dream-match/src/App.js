import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Teams from './components/Teams';
import Team1 from './components/Team1';
import Team2 from './components/Team2';
import Clubs from './components/Clubs';
import ClubPlayers from './components/ClubPlayers';
import Player from './components/Player';

function App() {
  return (
  <BrowserRouter>
   <div className="App">
     <Routes>
       <Route exact path='/' element = {<Landing/>}/>
       <Route exact path='/teams' element = {<Teams/>}/>
       <Route exact path='/team1' element = {<Team1/>}/>
       <Route exact path='/team2' element = {<Team2/>}/>
       <Route exact path='/clubs' element = {<Clubs/>}/>
       <Route exact path='/clubPlayers/:id' element = {<ClubPlayers/>}/>
       <Route exact path='/player/:id' element = {<Player/>}/>
     </Routes>
   </div>
  </BrowserRouter>
  );
}

export default App;
