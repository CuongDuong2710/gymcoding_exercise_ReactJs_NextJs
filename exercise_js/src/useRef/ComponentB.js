import { useState, useRef } from "react"

// - Accessing DOM Elements
export default function ComponentB() {
    const inputElement = useRef()

    const focusInput = () => {
        inputElement.current.focus()
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>OnClick</button>
        </>
    )
}