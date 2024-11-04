import { useContext } from "react"
import { UserContext } from "./Component1"

export default function Component5() {
    const user = useContext(UserContext)

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}