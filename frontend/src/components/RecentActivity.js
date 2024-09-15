import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const RecentActivity = () => {
  return (
    <Paper style={{ padding: 16 }}>
      <List>
        {['Activity 1', 'Activity 2', 'Activity 3'].map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;
