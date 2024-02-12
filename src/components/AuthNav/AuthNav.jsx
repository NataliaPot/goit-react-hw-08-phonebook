import { Box, Button, ButtonGroup } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            backgroundColor: 'white',
            marginRight: 6,
            textDecoration: 'none',
          }}
        >
          <Button
            component={NavLink}
            to="/register"
            sx={{ textDecoration: 'none' }}
          >
            Register
          </Button>
          <Button
            component={NavLink}
            to="/login"
            sx={{ textDecoration: 'none' }}
          >
            Log In
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};
