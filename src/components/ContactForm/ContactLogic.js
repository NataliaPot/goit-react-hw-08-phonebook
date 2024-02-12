import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contacts/contactsOperations';
import toast from 'react-hot-toast';

export const useFormLogic = () => {
  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const [errors, setErrors] = useState({
    name: { isError: false, touched: false },
    number: { isError: false, touched: false },
  });

  const handleBlur = (name, contacts) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: { ...prevErrors[name], touched: true },
    }));

    if (name === 'name') {
      if (!/^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$/.test(value.name.trim())) {
        toast.error('Please enter a valid name.', {
          duration: 3000,
          position: 'top-center',
          style: {
            border: '1px solid #0600a9',
            padding: '16px',
            color: '#0600a9',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
          },
        });
        setErrors(prevErrors => ({
          ...prevErrors,
          name: { isError: true, touched: true },
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          name: { isError: false, touched: true },
        }));
      }
    }

    if (name === 'number') {
      if (
        !/^\+?\d{1,4}?[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$/.test(
          value.number.trim()
        )
      ) {
        toast.error('Please enter a valid phone number.', {
          duration: 3000,
          position: 'top-center',
          style: {
            border: '1px solid #0600a9',
            padding: '16px',
            color: '#0600a9',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
          },
        });
        setErrors(prevErrors => ({
          ...prevErrors,
          number: { isError: true, touched: true },
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          number: { isError: false, touched: true },
        }));
      }
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue(prevValue => ({ ...prevValue, [name]: value }));

    if (errors[name].isError && value.trim() && name === 'name') {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: { isError: false, touched: false },
      }));
    }
    if (errors[name].isError && value.trim() && name === 'number') {
      setErrors(prevErrors => ({
        ...prevErrors,
        number: { isError: false, touched: false },
      }));
    }

    if (!value && errors[name].isError) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: { isError: false, touched: false },
      }));
    }
  };

  const handleSubmit = (dispatch, contacts) => e => {
    e.preventDefault();
    const id = nanoid();

    if (contacts.some(contact => contact.name === value.name)) {
      setValue({
        name: '',
        number: '',
      });
      return toast(`${value.name} is already in contacts.`, {
        duration: 5000,
        position: 'top-center',
        style: {
          border: '1px solid #0600a9',
          padding: '16px',
          color: '#0600a9',
          filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
        },
      });
    }

    if (!/^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$/.test(value.name.trim())) {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: { isError: true, touched: true },
      }));
      return;
    }

    if (
      !/^\+?\d{1,4}?[ .-]?\(?\d{1,3}?\)?[ .-]?\d{1,4}[ .-]?\d{1,4}[ .-]?\d{1,9}$/.test(
        value.number.trim()
      )
    ) {
      setErrors(prevErrors => ({
        ...prevErrors,
        number: { isError: true, touched: true },
      }));
      return;
    }

    setErrors({
      name: { isError: false, touched: false },
      number: { isError: false, touched: false },
    });

    dispatch(addContact({ id, name: value.name, number: value.number }));
    setValue({
      name: '',
      number: '',
    });
  };

  return { value, handleChange, handleSubmit, handleBlur, errors };
};
