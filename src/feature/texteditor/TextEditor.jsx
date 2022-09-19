import React from 'react';
import { BaseDirectory, createDir, readTextFile, writeTextFile } from '@tauri-apps/api/fs';
import { Button, Stack, TextField } from '@mui/material';
import { Fragment, useState } from 'react';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

export const TextEditor = () => {
  const checkPermit = async () => {
    let permissionGranted = await isPermissionGranted();
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === 'granted';
    }
    if (permissionGranted) {
      sendNotification('Tauri is awesome!');
      sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
    }
  };

  const [textFileContents, setTextFileContents] = useState('');
  const [value, setValue] = useState('');

  const createUserDir = async () => {
    await createDir('users', { dir: BaseDirectory.Download, recursive: true });
  };

  const openFile = async () => {
    const contents = await readTextFile('app.conf', { dir: BaseDirectory.Download });
    setTextFileContents(contents);
    setValue(contents);
  };

  const saveFile = async () => {
    await writeTextFile('app.conf', value, { dir: BaseDirectory.Download });
    await checkPermit();
  };

  const reset = async () => {
    setValue(textFileContents);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Fragment>
      <Stack direction={'row'}>
        <Button onClick={() => openFile()}>read</Button>
        <Button onClick={() => createUserDir()}>create</Button>
      </Stack>
      <Stack direction={'column'}>
        <TextField value={value} onChange={handleChange} multiline rows={20} fullWidth />
        <Stack direction={'row'}>
          <Button onClick={() => saveFile()}>save</Button>
          <Button onClick={() => reset()}>reset</Button>
        </Stack>
      </Stack>
    </Fragment>
  );
};
