import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ReactSimpleImageViewer from 'react-simple-image-viewer';
import { ButtonGroup } from '@material-ui/core';
import '../StaffInfo/Saffs/staff.css'


export default function Gallary() {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [latestItem , setLatestItem] = React.useState()
  
    
    const [menuTab, setMenuTab] = React.useState('b')


  


    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }


   

    const openImageViewer = React.useCallback((index) => {
      console.log(index)
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
   
  React.useEffect(()=>{
    let src = itemData?.filter((item) => menuTab === item.title)?.map(function(item) {
      return item['img'];
    });
    setLatestItem(src)
  },[menuTab ])
      console.log(currentImage)
      console.log(latestItem)
  return (
  <div>
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}>

    
    
    </div>
     <Container>
     <div className="menuStaff">
          <p style={{marginRight:'10px'}} className={menuTab === 'b' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('b')}>Office</p>
          <p style={{marginRight:'10px'}} className={menuTab === 'c' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('c')}>Outside</p>
          <p className={menuTab === 'o' ? "active_menu_tab" : "menu_tab"} onClick={() => handleMenuTabs('o')}>Other</p>
      </div>

     <ImageList gap={12} sx={{ width: '100%', height: 'auto', gridTemplateColumns:
            'repeat(auto-fill, minmax(250px, 1fr))!important', }} rowHeight={200}>
      {latestItem?.map((item , index) => (
        <ImageListItem sx={{  height: '100% !important' }} key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            onClick={ () => openImageViewer(index) }
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div style={{padding:'30px'}}>
    {isViewerOpen && ( 
        <ReactSimpleImageViewer
          src={ latestItem }
          currentIndex={ currentImage }
          disableScroll={ false }
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          style={{
            height:'300px'
          }}
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
   </Container>
  </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'b',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'b',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'c',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'c',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'o',
  },
 
];