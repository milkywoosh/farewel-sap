

//  UNDERSTAND THIS --> https://reactjs.org/docs/state-and-lifecycle.html


// import the package we have made
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Counters from './components/interactiveListFeatureClass/counters';
import Clock from './components/clockClass/clock';
import Board from './components/boardProjectClass/board';
import Game from './components/boardProjectClass/game';
import Henloo from './components/lkm_trial/lkm'
import CounterFunc from './components/countersFunction/counterFunc'
// import CounterImprove from './components/counterImprove'
// import CounterCondRender from './components/counterConditionalRendering';
// import AppHello from './Apphello'

import BoardFunc from './components/boardProjectFunction/boardFunc';
import CounterFeatureFunc from './components/interactiveListFeaturesFunction/countersMainFunc';



ReactDOM.render(
  //  put your 'Package' inside the <React.Fragment>
  <React.Fragment>
     {/* <BindingAny />
     <Clock />}
    {/* <CounterFunc /> */}
    {/* current focus */}
    {/* <Board /> */}
     {/* <Game /> */}
     {/* <Henloo /> */}
     {/* <App /> */}

     {/* <Counters /> */}
     <BoardFunc />
     <CounterFeatureFunc />

 
     
  </React.Fragment>, 
  document.getElementById('root')
 
 
);
//<App /> 
 // {/* element, document.getElementById('root'); */}
   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
