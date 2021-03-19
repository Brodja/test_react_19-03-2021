

const StopWatch = (props) => {
    return (
        <div>
            {(props.time.h >= 10) ? props.time.h : "0"+ props.time.h} : {(props.time.m >= 10) ? props.time.m : "0"+ props.time.m} : {(props.time.s >= 10) ? props.time.s : "0"+ props.time.s}
        </div>
    )
}

export default StopWatch;
