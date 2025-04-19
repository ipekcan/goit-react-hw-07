import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
        state.items.push(action.payload);
    },
    
    deleteContact: (state, action) => {
        
         const contactId = action.payload;
         state.items = state.items.filter(item => item.id !== contactId);
    }
  }
});

export const selectAllContacts = (state) => state.contacts.items;
export const filterContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
export const { addContact, deleteContact } = slice.actions;



export default slice.reducer;
