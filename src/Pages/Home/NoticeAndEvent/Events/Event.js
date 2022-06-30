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
import { useTheme } from 'styled-components';
import { Button } from '@material-ui/core';





const Event = ({ev}) => {
  const theme = useTheme();

  // My card preferences

  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 10
  };
    return (
        
      <div>
       <Card sx={CARD_PROPERTY}>
              <CardMedia
                component="img"
                height="194"
                image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  {ev.headline}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {ev.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
      </div>
       
    );
};

export default Event;