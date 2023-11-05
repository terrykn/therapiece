import React from 'react';
import LogoutButton from '../components/LogoutButton';
import {
  Avatar,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@mui/material';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <Grid container style={{ marginTop: '20px' }} spacing={2}>
        
        <Grid item xs={12} md={6}>
          <Typography style={{ marginTop: '5px', marginBottom: '5px' }} variant="h5">
            Profile
          </Typography>
          <Avatar alt="Profile Picture" src="" sx={{ width: 100, height: 100 }} />
          <Typography style={{ marginTop: '5px', marginBottom: '5px' }} variant="h5">
            Terry 
          </Typography>
          <Typography style={{ marginTop: '5px', marginBottom: '15px' }} variant="body1">
            terry.nguyen@rutgers.edu
          </Typography>
          <LogoutButton />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{ marginTop: '5px', marginBottom: '5px' }} variant="h5">
            Settings
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Dark Mode" />
            <FormControlLabel control={<Switch />} label="Show Friends to Public" />
            <Button variant="contained" style={{ fontFamily: 'Segoe UI', marginTop: '10px', backgroundColor: '#5A50EF' }}>
              Edit Language
            </Button>
          </FormGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
