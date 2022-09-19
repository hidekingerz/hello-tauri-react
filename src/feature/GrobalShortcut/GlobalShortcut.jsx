import React, { useState } from 'react';
import { isRegistered, register, unregister } from '@tauri-apps/api/globalShortcut';
import { Button, Stack, Typography } from '@mui/material';

export const GlobalShortcut = () => {
  const [reg, setReg] = useState('');
  const [reg2, setReg2] = useState('');

  const isReg = async () => {
    let flag = await isRegistered('Command+E');
    flag ? setReg('OK') : setReg('NG');
  };

  const isReg2 = async () => {
    let flag = await isRegistered('Shift+B');
    flag ? setReg2('OK') : setReg2('NG');
  };

  const setGlobalKeys = async () => {
    await register('Command+E', () => {
      // ショートカット実行内容
      console.log('Shortcut triggered');
    });
  };

  const unsetGlobalKeys = async () => {
    await unregister('Command+E');
  };

  return (
    <Stack direction={'column'}>
      <Button onClick={() => setGlobalKeys()}>GlobalShortcut Register(CMD + E)</Button>
      <Button onClick={() => unsetGlobalKeys()}>GlobalShortcut unRegister(CMD + E)</Button>
      <Stack direction={'row'}>
        <Button onClick={() => isReg()}>GlobalShortcut Check(CMD + E)</Button>
        <Typography>CMD + E: {reg}</Typography>
      </Stack>
      <Stack direction={'row'}>
        <Button onClick={() => isReg2()}>GlobalShortcut Check(Shift + E)</Button>
        <Typography>CMD + E: {reg2}</Typography>
      </Stack>
    </Stack>
  );
};
