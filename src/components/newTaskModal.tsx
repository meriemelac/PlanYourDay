import { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export interface NewTask {
  title: string;
  description: string;
  date: string;
}

interface NewTaskModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (task: NewTask) => void;
}

export default function NewTaskModal({ open, onClose, onCreate }: NewTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate(dayjs());
  };

  const handleSubmit = () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle || !date) {
      return;
    }

    onCreate({
      title: trimmedTitle,
      description: description.trim(),
      date: date.format('DD-MM-YYYY'),
    });
    resetForm();
    onClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={open}
        onClose={() => {
          resetForm();
          onClose();
        }}
        fullWidth
        maxWidth="sm"
        aria-labelledby="new-task-dialog-title"
      >
        <DialogTitle id="new-task-dialog-title" sx={{ pr: 6, fontWeight: 700 }}>
          Create a new task
          <IconButton
            aria-label="close"
            onClick={() => {
              resetForm();
              onClose();
            }}
            sx={{ position: 'absolute', right: 12, top: 12, color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            <TextField
              autoFocus
              required
              label="Task name"
              placeholder="What do you need to do?"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              placeholder="Add some details (optional)"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              multiline
              minRows={3}
              fullWidth
            />
            <DatePicker
              label="Plan for"
              format="DD-MM-YYYY"
              value={date}
              onChange={setDate}
              slotProps={{ textField: { fullWidth: true, required: true } }}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={() => {
              resetForm();
              onClose();
            }}
            color="inherit"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<AddTaskIcon />}
            disabled={!title.trim() || !date}
          >
            Add task
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
