import { useState } from "react";
import UpperBar from "./components/upperBar";
import NewTaskModal, { type NewTask } from "./components/newTaskModal";
import TaskGroups from "./components/taskGroups";

function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState<NewTask[]>([]);

  const handleCreateTask = (task: NewTask) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  return (
    <div className="min-h-screen bg-white">
      <UpperBar onAddTask={() => setIsNewTaskModalOpen(true)} />
      <main className="mx-auto max-w-5xl px-2 py-2">
        {/* <h1 className="text-3xl font-bold text-gray-900">My day</h1>
        <p className="mt-2 text-gray-500">Organize your priorities and make today count.</p> */}
        <TaskGroups tasks={tasks} />
      </main>
      <NewTaskModal
        open={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
}

export default App;