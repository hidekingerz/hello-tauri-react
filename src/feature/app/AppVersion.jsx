import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { getName, getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { useState } from 'react';

export const AppVersion = () => {
  const [name, setName] = useState('');
  const [appVersion, setAppVersion] = useState('');
  const [tauriVersion, setTauriVersion] = useState('');

  useEffect(() => {
    (async () => {
      const appName = await getName();
      const tauriVer = await getTauriVersion();
      const appVer = await getVersion();
      setName(appName);
      setAppVersion(appVer);
      setTauriVersion(tauriVer);
    })();
  }, []);

  return (
    <Stack direction={'column'}>
      <Typography>informations</Typography>
      <Typography>{name}</Typography>
      <Typography>{appVersion}</Typography>
      <Typography>{tauriVersion}</Typography>
    </Stack>
  );
};
