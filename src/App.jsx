import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Activity from './pages/Activity';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat2 from './pages/Chat2';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';

import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    
        
   
        return (
            <div>
            <HashRouter>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '80vh' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/chat2" element={<Chat2 />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', minHeight: '10vh' }}>
                    <Box sx={{ width: 500 }} >
                    <BottomNavigation showLabels>
                        <BottomNavigationAction
                        label=""
                        icon={<HomeRoundedIcon />}
                        component={Link}
                        to="/home"
                        />
                        <BottomNavigationAction
                        label=""
                        icon={<PeopleRoundedIcon />}
                        component={Link}
                        to="/community"
                        />
                        <BottomNavigationAction
                        label=""
                        icon={<ChatRoundedIcon />}
                        component={Link}
                        to="/chat2"
                        />
                        <BottomNavigationAction
                        label=""
                        icon={<EmojiPeopleRoundedIcon />}
                        component={Link}
                        to="/activity"
                        />
                        <BottomNavigationAction
                        label=""
                        icon={<AccountCircleRoundedIcon />}
                        component={Link}
                        to="/profile"
                        />
                    </BottomNavigation>
                    </Box>
                </div>
                
            </HashRouter>
            </div>
        );
    
};

export default App;