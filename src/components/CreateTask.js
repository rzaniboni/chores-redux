import { Box } from '@twilio-paste/box';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <Box marginBottom="space60">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: 'IMPLEMENT_ME' });
          setTitle('');
        }}
      >
        <Label htmlFor="create-task-title">Title</Label>
        <Input
          id="create-task-title"
          placeholder="New Task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </Box>
  );
};
