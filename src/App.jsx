import {Container} from "@mui/material";
import {TextEditor} from "./feature/texteditor/TextEditor";
import {AppVersion} from "./feature/app/AppVersion";
import {ClipBoard} from "./feature/clipboard/ClipBoard";
import {Dialog} from "./feature/dialog/Dialog.jsx";


const App = () => {

  return (
    <Container>
      <TextEditor/>
      <AppVersion/>
      <ClipBoard />
      <Dialog />
    </Container>
  );
}

export default App;
