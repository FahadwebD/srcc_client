import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';





const Event = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div style={{display:'flex'}}>
      <div>
      <Card style={{margin:'10px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vice Chairman Md. Nur-Ur Rahman visiting Sylhet Red Crescent"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/285546591_4959211087511296_389308980695403123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rDPyxbk0ROYAX_X_1pJ&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-HSiIFEphEePcc616FKjpqPQLR6728jcQohYpBRaEBKg&oe=62A94D1F"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Bangladesh Red Crescent Societies honourable Vice Chairman Md. Nur-Ur Rahman visiting Sylhet Red Crescent Nursing College
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
   
    </Card>
      </div>
    <div>
    <Card style={{margin:'10px'}} sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vice Chairman Md. Nur-Ur Rahman visiting Sylhet Red Crescent"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/285546591_4959211087511296_389308980695403123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rDPyxbk0ROYAX_X_1pJ&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-HSiIFEphEePcc616FKjpqPQLR6728jcQohYpBRaEBKg&oe=62A94D1F"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Bangladesh Red Crescent Societies honourable Vice Chairman Md. Nur-Ur Rahman visiting Sylhet Red Crescent Nursing College
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
   
    </Card>
    </div>
        </div>
    );
};

export default Event;