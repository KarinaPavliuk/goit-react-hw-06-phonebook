import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContactAction: {
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    // createContactAction: (state, { type, payload }) => {
    //   state.contacts
    //     ? state.contacts.push({
    //         ...payload,
    //         id: nanoid(),
    //       })
    //     : (state.contacts = [
    //         {
    //           ...payload,
    //           id: nanoid(),
    //         },
    //     ]);

    // return {
    //   ...state,
    //   contacts: state.contacts
    //     ? [
    //         ...state.contacts,
    //         {
    //           ...payload,
    //           id: nanoid(),
    //         },
    //       ]
    //     : [
    //         {
    //           ...payload,
    //           id: nanoid(),
    //         },
    //       ],
    // };
    //},

    // deleteContact: (state, { type, payload }) => {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(contact => contact.id !== payload),
    //   };

    //   // setContacts(prevContacts =>
    //   //   prevContacts.filter(contact => contact.id !== id)
    //   // );
    // },
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContact } = contactSlice.actions;
