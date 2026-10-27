import { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  FormLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export interface NewTask {
  title: string;
  description: string;
  date: string;
  important: boolean;
  urgent: boolean;
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
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate(dayjs());
    setImportant(false);
    setUrgent(false);
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
      important,
      urgent,
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
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <FormControl>
                <FormLabel id="important-label">Important</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="important-label"
                  value={important ? 'yes' : 'no'}
                  onChange={(event) => setImportant(event.target.value === 'yes')}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="urgent-label">Urgent</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="urgent-label"
                  value={urgent ? 'yes' : 'no'}
                  onChange={(event) => setUrgent(event.target.value === 'yes')}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Stack>
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
