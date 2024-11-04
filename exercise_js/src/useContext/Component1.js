import { useState, createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext()

export default function Component1() {
    const [user, setUser] = useState('Jesse Hall')

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}