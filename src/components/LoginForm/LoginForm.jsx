import { useDispatch } from 'react-redux';
import React from 'react';
import { Box, Button } from '@mui/material';
import { logIn } from '../../redux/auth/authOperations';
import {
  Label,
  StyledInput,
} from 'components/RegisterForm/RegisterForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      sx={{
        border: '1px solid, black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        marginTop: '60px',
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
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
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
