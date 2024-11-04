import { useState, useRef, useEffect } from "react";

// It can be used to store a mutable value that does not cause a re-render when updated.
export default function ComponentA() {
    const [inputValue, setInputValue] = useState('')
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    )
} 