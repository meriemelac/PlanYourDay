import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { NewTask } from "./newTaskModal";

dayjs.extend(customParseFormat);

type TaskGroup = "today" | "future" | "missed";

interface TaskGroupsProps {
  tasks: NewTask[];
}

const getTaskGroup = (task: NewTask): TaskGroup => {
  const taskDate = dayjs(task.date, "DD-MM-YYYY", true);
  const today = dayjs().startOf("day");

  if (taskDate.isSame(today, "day")) {
    return "today";
  }

  return taskDate.isBefore(today, "day") ? "missed" : "future";
};

export default function TaskGroups({ tasks }: TaskGroupsProps) {
  const taskGroups = {
    today: tasks.filter((task) => getTaskGroup(task) === "today"),
    future: tasks.filter((task) => getTaskGroup(task) === "future"),
    missed: tasks.filter((task) => getTaskGroup(task) === "missed"),
  };

  const groupDetails = [
    {
      key: "today" as const,
      title: "Today",
      description: "Tasks planned for today",
      color: "bg-blue-600",
      tasks: taskGroups.today,
    },
    {
      key: "missed" as const,
      title: "Missed from past",
      description: "Tasks whose planned date has passed",
      color: "bg-red-600",
      tasks: taskGroups.missed,
    },
    {
      key: "future" as const,
      title: "Future",
      description: "Tasks planned for the coming days",
      color: "bg-violet-600",
      tasks: taskGroups.future,
    },
  ];

  return (
    <section className="mt-8 flex flex-col gap-5" aria-label="Task groups">
      {groupDetails.map((group) => (
        <section key={group.key} className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className={`${group.color} px-5 py-4 text-white`}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-semibold">{group.title}</h2>
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-sm font-bold">
                {group.tasks.length}
              </span>
            </div>
            <p className="mt-1 text-sm text-white/80">{group.description}</p>
          </div>
          <div className="min-h-28 space-y-3 p-4">
            {group.tasks.length === 0 ? (
              <p className="py-4 text-center text-sm text-gray-400">No tasks here</p>
            ) : (
              group.tasks.map((task, index) => (
                <article key={`${task.date}-${task.title}-${index}`} className="rounded-xs bg-white p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-900">{task.title}</h3>
                  {task.description && <p className="mt-1 text-sm text-gray-600">{task.description}</p>}
                  <p className="mt-2 text-xs text-gray-500">{task.date}</p>
                  <div className="mt-2 flex gap-2 text-xs font-medium">
                    {task.important && (
                      <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-800">Important</span>
                    )}
                    {task.urgent && (
                      <span className="rounded-full bg-red-100 px-2 py-1 text-red-800">Urgent</span>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      ))}
    </section>
  );
}
