import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const filteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  }
);
