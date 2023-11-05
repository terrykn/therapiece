import React from 'react';
import { IconButton, AppBar, Toolbar, Typography, List, ListItem, ListItemText, TextField, Button, Avatar } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Chat = () => {
  const chatBoxStyle = {
    fontFamily: 'Segoe UI',
    maxWidth: '300px',
    position: 'relative',
    padding: '10px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const { user } = useAuth0();

  return (
    <div>
      <AppBar style={{ backgroundColor: '#5A50EF', fontFamily: 'Segoe UI', marginTop: '30px' }} position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
    <div>
      <IconButton 
        component={Link}
        to="/chat2" 
        edge="start" 
        color="inherit" 
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src="https://media.licdn.com/dms/image/C4E03AQGYUNWMDDPWtQ/profile-displayphoto-shrink_800_800/0/1600466384720?e=2147483647&v=beta&t=YkdfX9Kr4TNc4QDiuqYjb_xB-DZ22UgR4ZFPcIExRW0" />
      <Typography style={{ marginLeft: '15px', fontFamily: 'Segoe UI' }} variant="h6">
        John Doe
      </Typography>
      <PhoneEnabledIcon style={{ marginLeft: '15px' }} />
    </div>
      </Toolbar>

      </AppBar>
      <List>
        <ListItem>
          <ListItemText
            style={{ ...chatBoxStyle, marginLeft: '300px' }}
            secondary="Hi John! Just checking up on your progress, how are the new exercises going?"
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              {user.name} (Physical Therapist)
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            style={{ ...chatBoxStyle }}
            secondary="They're going great! the group sessions have been really fun and helpful"
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              John Doe
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            style={{ ...chatBoxStyle, marginLeft: '300px' }}
            secondary="Glad to hear! Looking forward to the next session."
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              {user.name} (Physical Therapist)
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <div>
        <TextField label="Type a message" style={{ fontFamily: 'Segoe UI', marginBottom: '10px' }} fullWidth />
        <Button style={{ backgroundColor: '#5A50EF', float: 'right', fontFamily: 'Segoe UI' }} variant="contained" color="primary">
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
