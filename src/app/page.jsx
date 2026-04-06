import sequelize from "@/backend/db/db";
import TaskCard from "./components/TaskCard";
import AddTask from "./components/AddTask";

export default async function Home() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection works!!");
  } catch (myError) {
    console.error("Connection failed.. --> ", myError)
  }

  return (
    <div>
      <AddTask />
      <TaskCard />
    </div>
  );
}
