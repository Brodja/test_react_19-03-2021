const Buttons = (props) => {
    return (
        <div>
            {(props.mod === 0)?
                <div>
                    <button onClick={props.start}>Start</button>
                    <button onDoubleClick={props.wait}>Wait</button>
                    <button onClick={props.reset}>Reset</button>
                </div> : ""

            }

            {(props.mod === 1)?
                <div>
                    <button onClick={props.stop}>Stop</button>
                    <button onDoubleClick={props.wait}>Wait</button>
                    <button onClick={props.reset}>Reset</button>
                </div> : ""
            }


        </div>
    )
}

export default Buttons;
