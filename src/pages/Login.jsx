import React from 'react';
import LoginButton from '../components/LoginButton';
import { YouTubeEmbed } from 'react-social-media-embed';

const Login = () => {
  return (
    <div style={{ paddingTop: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
      <h2>(Physician Therapist Login)</h2>
      <LoginButton />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <YouTubeEmbed url="https://youtu.be/wgZoXPIxLQU" width={200} height={135} />
      </div>
    </div>
  );
};

export default Login;