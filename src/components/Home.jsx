import React from "react"
import Character from "./Character"
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <h2>Home</h2>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="character">Character</Link>
            </nav>
            {/* <Character /> */}
        </div>
    )
}