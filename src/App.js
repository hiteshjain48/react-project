import './App.css';
import React from 'react'
import Weather from './components/Weather';
import Form from './components/form';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Clock from './components/Clock'
import Calculator from './components/Calculator';
import Player from './components/Player'
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/Weather' element={<Weather/>}></Route>
          <Route path='/Form' element={<Form/>}></Route>
          <Route path='/Home' element={<App/>}></Route>
          <Route path='/Clock' element={<Clock/>}></Route>
          <Route path='/Calculator' element={<Calculator/>}></Route>
          <Route path='/Music' element={<Player/>}></Route>
        </Routes>
        {/* <h3>Every Project Here.</h3> */}
      </div>
  );
}

export default App;
