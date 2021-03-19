import React, {useState} from 'react';
import './App.css';
import StopWatch from "./Components/stopWatch/StopWatch";
import Buttons from "./Components/button/Button";


const App = (props) => {
    const [time, setTime] = useState({h: 0, m: 0, s: 0});
    const [interv, setInterv] = useState();
    const [mod, setMod] = useState(0);

    const start = () =>{
        tick();
        setMod(1)
        setInterv(setInterval(tick, 1000));
    }
    const wait = () => {
        setMod(0)
        clearInterval(interv);
    }
    const reset = () => {
        clearInterval(interv);
        upH = 0
        upM = 0
        upS = 0
        setTime({h: 0, m: 0, s: 0})
        setInterv(setInterval(tick, 1000));

    };
    const stop = () => {
        clearInterval(interv);
        setMod(0);
        setTime({h: 0, m: 0, s: 0})
    }

    var upH = time.h, upM = time.m, upS = time.s;
    let tick = () => {
        if(upS === 59){
            upM++;
            upS = 0;
        }
        if(upM === 59){
            upH++;
            upM = 0;
        }
        upS++;
        return setTime({h: upH, m: upM, s: upS});
    }

    return (
        <div className="stopWatch">
            <StopWatch time={time}/>
            <Buttons  mod={mod}  stop={stop} reset={reset} wait={wait} start={start}/>
        </div>
    )
}

export default App;
