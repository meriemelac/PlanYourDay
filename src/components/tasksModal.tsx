import * as React from 'react';
import { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";
import Box from '@mui/material/Box';


function TasksModal() {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    return (
        <Box className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h1>New task</h1>
            <input
                type="text"
                placeholder="Task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => { setTaskDescription(e.target.value) }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Controlled picker"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e)}
                />
            </LocalizationProvider>

        </Box>
    );
}

export default TasksModal;