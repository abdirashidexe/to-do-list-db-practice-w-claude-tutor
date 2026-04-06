"use client"

import { createTask } from "@/backend/actions"
import { useState } from "react";

export default function AddTask() {

    // let userTitle = ""
    const [userTitle, setUserTitle] = useState("")

    function handleAdd() {
        createTask(userTitle);
        console.log("Add clicked!")
    }

    return (
        <>
            <label>Add a Task:</label>
            <input type="text" value={userTitle} onChange={(event) => setUserTitle(event.target.value)}></input>
            <button onClick={handleAdd}>Add Task</button>
        </>
    )
}