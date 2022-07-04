import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const OldNotices = ({notice}) => {

    const CARD_PROPERTY = {
        borderRadius: 3,
        boxShadow: 10
      };
    return (
            <Card sx={CARD_PROPERTY}>
              <Box>
                <CardMedia
                  component="img"
                  height="194"
                  image={`data:image/png;base64,${notice?.image}`}
                  alt="Image"
                />
              </Box>
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography variant="body1" sx={{ mb: 3 }} color="black">
                  {notice.notice}
                </Typography>
              </CardContent>
            </Card>
          

    
    );
};

export default OldNotices;