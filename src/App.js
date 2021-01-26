import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route,Switch, Redirect, Link } from 'react-router-dom'
import PageWrapper from './component/PageWrapper';
import GameWrapper from './component/game/GameWrapper';
import Game from './component/game/Game';
import Home from './component/home/Home';
import  About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import Slider from './component/home/Slider';
import Sliding from './component/home/Sliding';
import Slide from './component/home/Slide';

class App extends Component {
  render(){


    return(<Router>
      <Route
      exact = {true}
      path = '/'
      render = {
        props =>{
          return (
            <div className="App" style={{width:'100%',height:'100%',margin:'0px'}}>
    
              <PageWrapper style={{width:'100%',height:'100%',margin:'0px'}}>
                <Home/>
                <About/>
                <Service/>
                <Portfolio/>
                
              </PageWrapper>
    
              
            </div>
          );

        }
      }
      
      
      
      >
      
      </Route>
      <Route
      exact = {true}
      path = '/game'
      render = {
        props =>{
          return (
            <div className="App" >
    
              <GameWrapper style={{width:'100%',height:'100%',margin:'0px'}}>

              </GameWrapper>
    
              
            </div>
          );

        }
      }
      
      
      
      >
      
      </Route>
    </Router>)

  }
  
}

export default App;
