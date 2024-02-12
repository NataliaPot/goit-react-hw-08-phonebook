import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredContact } from '../../redux/filtersSlice';
import { Container, LabelFindText } from './FilterContact.styled';
import { StyledInput } from 'components/RegisterForm/RegisterForm.styled';

const FilterContact = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <LabelFindText>Find contacts by name</LabelFindText>
      <StyledInput
        type="text"
        name="filter"
        onChange={e => dispatch(filteredContact(e.target.value))}
      />
    </Container>
  );
};

export default FilterContact;
