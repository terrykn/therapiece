import { Button, LinearProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const Activity = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Current Activity: __________</h2>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          width: '650px',
          height: '20px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#5A50EF',
          },
        }}
      />
      <Webcam
        audio={false}
        height="400px"
        screenshotFormat="image/jpeg"
        width="600px"
        videoConstraints={videoConstraints}
      />
      <Button
        style={{ backgroundColor: '#5A50EF', fontWeight: 'bold', fontFamily: 'Segoe UI', padding: '5px', marginBottom: '10px' }}
        variant="contained"
        color="primary"
        onClick={handleStart}
      >
        Start
      </Button>
      <Button
        style={{ backgroundColor: '#5A50EF', fontWeight: 'bold', fontFamily: 'Segoe UI', padding: '5px', marginBottom: '10px' }}
        variant="contained"
        color="primary"
        onClick={handlePause}
      >
        Take a break
      </Button>
    </div>
  );
};

export default Activity;