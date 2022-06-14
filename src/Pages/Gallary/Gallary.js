import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ReactSimpleImageViewer from 'react-simple-image-viewer';
import { ButtonGroup } from '@material-ui/core';



export default function Gallary() {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [latestItem , setLatestItem] = React.useState()
    const [alignment, setAlignment] = React.useState('all');
    
    

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

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
    let src = itemData.map(function(item) {
      return item['img'];
    });
    setLatestItem(src)
  },[ ])
      console.log(currentImage)
      console.log(latestItem)
  return (
  <div>
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' }}>

    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="office">Office</ToggleButton>
      <ToggleButton value="other">Other</ToggleButton>
    </ToggleButtonGroup>
    
    </div>
     <Container>
     <ImageList gap={12} sx={{ width: '100%', height: 'auto', gridTemplateColumns:
            'repeat(auto-fill, minmax(250px, 1fr))!important', }} rowHeight={200}>
      {latestItem?.map((item , index) => (
        <ImageListItem sx={{ height: '100% !important' }} key={item}>
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
    {isViewerOpen && (
        <ReactSimpleImageViewer
          src={ latestItem }
          currentIndex={ currentImage }
          disableScroll={ false }
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          style={{
            height:'400px'
          }}
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
   </Container>
  </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];