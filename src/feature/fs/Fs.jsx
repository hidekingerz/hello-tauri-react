import React, { useEffect, useState } from 'react';
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

export const Fs = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const entries = await readDir('old', { dir: BaseDirectory.Download, recursive: true });
      console.log(entries);
      setList(entries);
    })();
  }, []);

  return (
    <Stack direction={'column'}>
      <Typography>FS</Typography>
      <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
        {list.map((value, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem key={index} disablePadding>
              <ListItemText id={labelId} primary={value.name} secondary={value.path} />
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};
