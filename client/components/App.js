import React,{useState} from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './App.css'
import smiley from './smiley.png'

function App(){
    useStyles(s);
    const [counter,setCounter] = useState(0);
    return (
        <div className="App">
            <img src={smiley}/>
            <h1>Counter:{counter}</h1>
            <button onClick={(e) => setCounter(counter+1)}>Click</button>
        </div>
    );
}

export default App 
