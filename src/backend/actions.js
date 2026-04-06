"use server"

import Task from "./db/task.model"

export async function createTask(yourTitle) {
    await Task.create({ title: yourTitle, done: true }) // will replace this with user input after i verify it appears in mysqlworkbench
}

export async function getAllTasks() {
    return await Task.findAll();
}
