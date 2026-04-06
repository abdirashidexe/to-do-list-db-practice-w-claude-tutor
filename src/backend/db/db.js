import { Sequelize } from "sequelize";

//  writing down a server's address and your login info on a piece of paper. You haven't knocked on the door yet, you're just prepared to.

// we create a Sequelize instance. Instatiating it. open walkie-talkie connected to your MySQL database.
const sequelize = new Sequelize("practice_claude", "root", "2020", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;