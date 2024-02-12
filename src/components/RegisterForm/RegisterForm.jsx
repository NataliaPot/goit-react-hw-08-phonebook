import { useDispatch } from 'react-redux';
import React from 'react';
import { Box, Button } from '@mui/material';
import { register } from '../../redux/auth/authOperations';
import { Label, StyledInput } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        marginTop: '60px',
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>Username</Label>
        <StyledInput
          placeholder="Write your name here"
          type="text"
          name="username"
          required
          autoComplete="name"
        />
        <Label>Email</Label>
        <StyledInput
          placeholder="Write your email here"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
        <Label>Password</Label>
        <StyledInput
          placeholder="Write your password here"
          type="password"
          name="password"
          required
          autoComplete="current-password"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#0600a9',
            marginTop: '20px',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
          }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
