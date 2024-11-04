import { useState, useRef, useEffect } from 'react'

//- Tracking State Changes
// + The useRef Hook can also be used to keep track of previous state values.
export default function ComponentC() {

    const [inputValue, setInputValue] = useState('')
    const previousInputValue = useRef('vvv')

    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue])

    return (
        <>
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
            />
            <p>{`Current value: ${inputValue}`}</p>
            <p>{`Previous value: ${previousInputValue.current}`}</p>
        </>
    )
}