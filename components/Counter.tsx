import React , {useState} from 'react'

const Counter = (props:any) => {

    const [counter , setCounter] = useState<number>(0)

    const handleCounterChange = () => {
        setCounter(counter+1)
    }

    return(
        <div className="my-component" onClick={()=>handleCounterChange()}>
            <h2>My Component ({counter} clicks)</h2>
        </div>
    )
}

export default Counter