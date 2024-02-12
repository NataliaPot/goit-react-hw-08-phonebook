import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Box, Button, ButtonGroup, Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        marginRight: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Chip
        label={user.name}
        disabled={false}
        size="medium"
        variant="outlined"
        sx={{
          backgroundColor: 'white',
          marginLeft: 2,
          textDecoration: 'none',
          borderRadius: '4px',
          color: '#0600a9',
        }}
      />
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{
          backgroundColor: 'white',
          marginLeft: 2,
          textDecoration: 'none',
        }}
      >
        <Button type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </Button>
      </ButtonGroup>
    </Box>
  );
};
