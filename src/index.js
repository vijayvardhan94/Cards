import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Card from './Card';// we have a file called cardlist
import CardList from './CardList';
import 'tachyons';
 //robots isnt a defualt export type so you have to destructure it
import * as serviceWorker from './serviceWorker';
import {robots} from './robots';

//giving properties to your custom html
ReactDOM.render(
    
    
            <App />,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
