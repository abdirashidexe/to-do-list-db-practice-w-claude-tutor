"use client"

import { useState, useEffect } from "react"
import * as Actions from "./../../backend/actions"

export default function TaskCard() {
    // const allTasks = await Actions.getAllTasks()
    // console.log("YO+", JSON.stringify(allTasks))

    const [allTasks, setAllTasks] = useState([])
    useEffect(() => {
        Actions.getAllTasks()
        .then(myDataFromAbove => setAllTasks(myDataFromAbove))
    }, [])

    return (
        <>
        <ul>
            {/* // <div>this is a card</div> */}
            { allTasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            )) }
        </ul>
        <button onClick={() => window.location.reload()}>Refresh</button>
        <p>^ sorry, u gotta refresh for now to see the newly updated tasks.</p>
        </>
    )
}