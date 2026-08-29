import { useState } from "react";
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function TasksModal() {
    const [taskName, setTaskName] = useState("");
    return (
        <div className="bg-white flex flex-row place-content-between p-2 rounded-2xl shadow-lg text-center gap-4">
            <img src="/logo.png" alt="Logo" className="w-1/4 h-20 mr-4" />
            <input
                className="w-2/4 p-2 border rounded-lg"
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <Button
                className="w-1/4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Add task
            </Button>

        </div>
    );
}

export default TasksModal;