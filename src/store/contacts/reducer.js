// import { nanoid } from 'nanoid';
// import { initialState } from './initialState';
// import { createReducer } from '@reduxjs/toolkit';
// import { createContactAction, deleteContact } from './actions';

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
//   [deleteContact]: (state, { type, payload }) => {
//     return {
//       ...state,
//       contacts: state.contacts.filter(contact => contact.id !== payload),
//     };

//     // setContacts(prevContacts =>
//     //   prevContacts.filter(contact => contact.id !== id)
//     // );
//   },
// });

// // export const reducerContacts = (state = initialState, { type, payload }) => {
// //   switch (type) {
// //     case CREATE_CONTACTS:
// //       return {
// //         ...state,
// //         contacts: state.contacts
// //           ? [
// //               ...state.contacts,
// //               {
// //                 ...payload,
// //                 id: nanoid(),
// //               },
// //             ]
// //           : [
// //               {
// //                 ...payload,
// //                 id: nanoid(),
// //               },
// //             ],
// //       };

// //     default:
// //       return state;
// //   }
// // };
