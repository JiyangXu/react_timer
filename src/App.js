import React,{useState, useEffect} from 'react'

export const App = () => {
    const [counter, setCounter] = useState(0);
    let timer

    useEffect(()=> {
        timer = setTimeout(() => setCounter(counter + 1), 1000);
    }, [counter]
    )
   
    const handleStop=()=>{
        clearInterval(timer)
    }

    const handleResume=(counter)=>{
        timer = setTimeout(() => setCounter(counter + 1), 1000);
    }

    return (
        <>
            <p> {counter} </p>
            <button onClick={handleStop}>stop</button>
            <button onClick={()=>handleResume(counter)}>resume</button>
        </>
    )
}

export default App