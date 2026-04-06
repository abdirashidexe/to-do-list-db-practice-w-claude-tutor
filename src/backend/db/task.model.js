import { DataTypes } from "sequelize";
import sequelize from "./db";

// A model is a JavaScript representation of a database table.
// You define it once in code, and Sequelize uses it to create the table,
// insert rows, query data, etc.

// - Your `Task` JavaScript object *represents* the `Tasks` table
// - Every property you define in the model (`title`, `done`) becomes a *column* in that table
// - Every time you do `Task.create(...)` in JavaScript, Sequelize translates that into a real SQL `INSERT INTO Tasks ...` behind the scenes
const Task = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Task;