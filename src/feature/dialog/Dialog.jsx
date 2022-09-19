import {ask, open} from '@tauri-apps/api/dialog';
import {Button, ImageList, ImageListItem, Stack} from "@mui/material";
import {useState} from "react";
import {convertFileSrc} from "@tauri-apps/api/tauri";

export const Dialog = () => {
  const [itemData, setItemData] = useState([]);
  const askDialog = async () => {
    const yes = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
    if (yes) {
      console.log('user yes')
      console.log(yes)
    } else if (!yes) {
      console.log('user cancel')
      console.log(yes);
    }
  }

  const fileOpenDialog = async () => {
    const selected = await open({
      multiple: true,
      filters: [{
        name: 'Image',
        extensions: ['png', 'jpeg']
      }]
    });
    console.log(selected)
    if (Array.isArray(selected)) {
      // user selected files
      console.log('user multi selected');
      let imgList = []
      selected.map((item) => {
        const data = { img : convertFileSrc(item)}
        imgList.push(data);
      })
      setItemData(imgList);
    } else if (selected === null) {
      // user cancelled the selection
      console.log('user canceld');
    }
  }

  return (
    <Stack direction={'row'}>
      <Button onClick={() => askDialog()}>Open ASK Dialog</Button>
      <Button onClick={() => fileOpenDialog()}>Open File Dialog</Button>
      <StandardImageList itemData={itemData} />
    </Stack>
  )
}


export const StandardImageList = (props) => {
  const itemData = props.itemData;
  console.log('hoge')
  console.log(itemData)
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
           alt={'alt'}/>
        </ImageListItem>
      ))}
    </ImageList>

  );
}
