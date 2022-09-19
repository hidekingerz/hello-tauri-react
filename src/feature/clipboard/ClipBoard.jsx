import React from 'react';
import { writeText, readText } from '@tauri-apps/api/clipboard';
import { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';

export const ClipBoard = () => {
  const [clip, setClip] = useState('no data');

  const getClipBoard = async () => {
    const clipboardText = await readText();
    setClip(clipboardText);
  };

  const writeClipBoard = async () => {
    await writeText('Tauri is memo');
  };

  return (
    <Stack direction={'row'}>
      <Typography>{clip}</Typography>
      <Button onClick={() => getClipBoard()}>Get Clipboard</Button>
      <Button onClick={() => writeClipBoard()}>Write Clipboard</Button>
    </Stack>
  );
};
