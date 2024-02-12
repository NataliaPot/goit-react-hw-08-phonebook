import { NavLink } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { darkTheme } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                marginLeft: 6,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
            >
              <NavLink
                to="/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <HomeIcon
                  sx={{
                    fontSize: 40,
                    marginRight: 2,
                    color: 'white',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.1)' },
                    cursor: 'pointer',
                  }}
                />
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  to="/contacts"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                    sx={{
                      backgroundColor: 'white',
                      marginLeft: 2,
                      textDecoration: 'none',
                    }}
                  >
                    <Button type="button"> Contacts</Button>
                  </ButtonGroup>
                </NavLink>
              )}
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
};
