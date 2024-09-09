import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.searchValue;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, searchValue) =>
    contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchValue.toLowerCase());
    })
);
