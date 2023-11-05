import React from 'react';
import { IconButton, AppBar, Toolbar, Typography, List, ListItem, ListItemText, TextField, Button, Avatar } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const Chat2 = () => {
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
        to="/chat" 
        edge="start" 
        color="inherit" 
        aria-label="menu"
      >
        <MenuIcon />
        
      </IconButton>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography style={{ marginLeft: '15px', fontFamily: 'Segoe UI' }} variant="h6">
        Contacts
      </Typography>
    </div>
      </Toolbar>

      </AppBar>
      <List>
        <ListItem>
            <Avatar component={Link} to="/chat" style={{ marginRight: '20px' }} />
          <ListItemText
            style={{ ...chatBoxStyle}}
            secondary="They're going great! the group sessions h..."
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              John Doe (Patient)
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem>
            <Avatar component={Link} to="/chat" style={{ marginRight: '20px' }} />
          <ListItemText
            style={{ ...chatBoxStyle}}
            secondary="Hi, I just have a question about when I ca..."
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              Judith Smith (Patient)
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem>
            <Avatar component={Link} to="/chat" style={{ marginRight: '20px' }} />
          <ListItemText
            style={{ ...chatBoxStyle}}
            secondary="Missed Call"
          >
            <Typography variant="body1" style={{ fontFamily: 'Segoe UI', fontWeight: 'bold' }}>
              Rebecca Daniels (Patient)
            </Typography>
          </ListItemText>
        </ListItem>
        
      </List>
      
    </div>
  );
};

export default Chat2;
