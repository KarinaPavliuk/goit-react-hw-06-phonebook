import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

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
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContact } = contactSlice.actions;
