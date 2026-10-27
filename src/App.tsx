import { useState } from "react";
import UpperBar from "./components/upperBar";
import NewTaskModal, { type NewTask } from "./components/newTaskModal";



function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState<NewTask[]>([]);

  const handleCreateTask = (task: NewTask) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  return (
    <div className="min-h-screen bg-white">
      <UpperBar onAddTask={() => setIsNewTaskModalOpen(true)} />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900">My day</h1>
        <p className="mt-2 text-gray-500">Organize your priorities and make today count.</p>
        {tasks.length > 0 && (
          <section className="mt-8 space-y-3" aria-label="Tasks">
            {tasks.map((task, index) => (
              <article key={`${task.date}-${index}`} className="rounded-xl border border-gray-200 p-4">
                <h2 className="font-semibold text-gray-900">{task.title}</h2>
                {task.description && <p className="mt-1 text-sm text-gray-600">{task.description}</p>}
                <p className="mt-2 text-xs text-gray-500">{task.date}</p>
              </article>
            ))}
          </section>
        )}
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