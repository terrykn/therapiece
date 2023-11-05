import React from 'react';
import LoginButton from '../components/LoginButton';

const Login = () => {
  return (
    <div style={{ paddingTop: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
      <h2>(Physician Therapist Login)</h2>
      <LoginButton />
    </div>
  );
};

export default Login;
