import './App.css';

import React, {useReducer} from 'react';
import {reducer} from "./reducer";

const initialState = {
    value: 0,
    op: '',
    num1: 0,
    num2: '',
    num3: ''
};


export const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="calculator">
            <div className="container">
                <div className="display">
                    {!state.num2 ? state.value : state.num2}
                    <span className="cursor"/>
                </div>
                <button className="btn" onClick={() => dispatch({type: 'ac'})}>AC</button>
                <button className="btn" onClick={() => dispatch({type: 'c'})}>C</button>
                <button className="btn" onClick={() => dispatch({type: 'operation', payload: '*'})}>x</button>
                <button className="btn" onClick={() => dispatch({type: 'operation', payload: '/'})}>/</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '7'})}>7</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '8'})}>8</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '9'})}>9</button>
                <button className="btn" onClick={() => dispatch({type: 'operation', payload: '+'})}>+</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '4'})}>4</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '5'})}>5</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '6'})}>6</button>
                <button className="btn" onClick={() => dispatch({type: 'operation', payload: '-'})}>-</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '1'})}>1</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '2'})}>2</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '3'})}>3</button>
                <button className="btn zero" onClick={() => dispatch({type: 'add', payload: '0'})}>0</button>
                <button className="btn" onClick={() => dispatch({type: 'add', payload: '.'})}>.</button>
                <button className="btn eq" onClick={() => dispatch({type: 'equal'})}>=</button>
            </div>
        </div>
    );
};
