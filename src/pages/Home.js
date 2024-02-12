import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          marginTop: '160px',
        }}
      >
        <ContactPhoneIcon
          sx={{
            fontSize: 200,
            color: '#0600a9',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
          }}
        />
        <Typography
          variant="h1"
          component="h2"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Welcome to PhoneBook
        </Typography>
      </Box>
    </>
  );
};

export default Home;
