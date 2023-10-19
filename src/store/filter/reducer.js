// import { initialState } from 'store/contacts/initialState';
// import { createReducer } from '@reduxjs/toolkit';
// import { handleFilterChanges } from './actions';

// export const reducerFilter = createReducer(initialState, {
//   [handleFilterChanges]: (state, { type, payload }) => {
//     return {
//       payload,
//     };
//   },
// });

// import { initialState } from './initialState';
// import { createReducer } from '@reduxjs/toolkit';
// import { createContactAction } from './actions';

// export const reducerContacts = createReducer(initialState, {
//   [createContactAction]: (state, { type, payload }) => {
//     return {
//       ...state,
//       contacts: state.contacts
//         ? [
//             ...state.contacts,
//             {
//               ...payload,
//               id: nanoid(),
//             },
//           ]
//         : [
//             {
//               ...payload,
//               id: nanoid(),
//             },
//           ],
//     };
//   },
// });
