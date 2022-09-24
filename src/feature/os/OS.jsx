import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { arch, platform, tempdir, type, version } from '@tauri-apps/api/os';

export const Os = () => {
  const [archName, setArchName] = useState('');
  const [platformName, setPlatformName] = useState('');
  const [tempDir, setTempDir] = useState('');
  const [osType, setOsType] = useState('');
  const [osVersion, setOsVersion] = useState('');

  useEffect(() => {
    (async () => {
      setArchName(await arch());
      setPlatformName(await platform());
      setTempDir(await tempdir());
      setOsType(await type());
      setOsVersion(await version());
    })();
  });

  return (
    <Card>
      <CardHeader title={'os API'} />
      <CardContent>
        <Typography>{archName}</Typography>
        <Typography>{platformName}</Typography>
        <Typography>{tempDir}</Typography>
        <Typography>{osType}</Typography>
        <Typography>{osVersion}</Typography>
      </CardContent>
    </Card>
  );
};
