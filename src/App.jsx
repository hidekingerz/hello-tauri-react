import React from 'react';
import { Container } from '@mui/material';
import { TextEditor } from './feature/texteditor/TextEditor';
import { AppVersion } from './feature/app/AppVersion';
import { ClipBoard } from './feature/clipboard/ClipBoard';
import { Dialog } from './feature/dialog/Dialog.jsx';
import { GlobalShortcut } from './feature/GrobalShortcut/GlobalShortcut';
import { Fs } from './feature/fs/Fs.jsx';

const App = () => {
  return (
    <Container>
      <TextEditor />
      <AppVersion />
      <ClipBoard />
      <Dialog />
      <GlobalShortcut />
      <Fs />
    </Container>
  );
};

export default App;
