import { Box, Button, IconButton } from '@material-ui/core';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from 'styled-components';

const Notice = ({note}) => {
    const theme = useTheme();

    // My card preferences
  
    const CARD_PROPERTY = {
      borderRadius: 3,
      boxShadow: 0,
      textAlign:'left'
    };
    return (
            <div >
                <Card sx={CARD_PROPERTY}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    mb: 3
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                      
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Created on {note.date}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="#000000" sx={{ mb: 3 }}>
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen..
                </Typography>
              </CardContent>
            </Card>
            </div>
        
    );
};

export default Notice;