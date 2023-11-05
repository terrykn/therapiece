import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Card, Checkbox } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [activityInput, setActivityInput] = useState('');

  const users = [
    { name: 'Jack', avatar: 'https://th.bing.com/th/id/OIP.fiO-7cMZbozb-kU_W-N0IAHaHa?pid=ImgDet&rs=1' },
    { name: 'Jennie', avatar: 'https://photos.modelmayhem.com/photos/180517/13/5afde6eccfe03.jpg' },
    { name: 'Joe', avatar: 'https://coolcreekfamilydental.com/wp-content/uploads/2018/10/patrick-r.jpg' },
  ];

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleActivityCreate = () => {
    if (activityInput) {
      setActivities([...activities, activityInput]);
      setActivityInput('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ padding: '30px', margin: '30px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
        <h2>Activities</h2>
        <h3>Choose patient</h3>
        <div style={{ display: 'flex' }}>
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.avatar} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </Card>
      

      {selectedUser && (
        <div>
          <h3>Create an Exercise for {selectedUser.name}:</h3>
          <TextField
            label="Enter activity"
            variant="outlined"
            value={activityInput}
            onChange={(e) => setActivityInput(e.target.value)}
          />
          <Button style={{ backgroundColor: '#5A50EF', fontWeight: 'bold', fontFamily: 'Segoe UI', padding: '15px', marginLeft: '10px' }} variant="contained" color="primary" onClick={handleActivityCreate} >Create</Button>
        </div>
      )}

      <div>
        <ul>
          {activities.map((activity, index) => (
            <p style={{ marginRight: '200px' }} key={index}><Checkbox />{activity}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;