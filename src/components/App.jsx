import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/authOperations';
import { Box, CircularProgress } from '@mui/material';
import { RestrictedRoute } from './RestrictedRoute';
import Login from 'pages/Login';
import { PrivateRoute } from './PrivateRoute';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress
        sx={{
          color: '#0600a9',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
        }}
      />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
