import React from 'react';
import { Button } from 'components/Contact/Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import {
  Card,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Card
        sx={{
          border: '1px solid #0600a96e',
          marginBottom: '4px',
          boxShadow: '0px 0 2px 1px rgba(0, 158, 186, 0.3)',
        }}
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            color: '#0600a9',
          }}
        >
          <PersonIcon
            sx={{
              color: '#0600a9',
              marginRight: 2,
            }}
          />
          <ListItemText
            primary={name}
            onClick={handleClick}
            sx={{
              color: 'black',
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              display: 'flex',
            }}
          >
            <ListItemButton sx={{ pl: 4, cursor: 'initial' }}>
              <LocalPhoneIcon
                sx={{
                  color: '#0600a9',
                  marginRight: 2,
                }}
              />
              <ListItemText primary={number} />
            </ListItemButton>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              <DeleteIcon
                sx={{
                  color: '#0600a9',
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
                }}
              />
            </Button>
          </List>
        </Collapse>
      </Card>
    </>
  );
};

export default Contact;
