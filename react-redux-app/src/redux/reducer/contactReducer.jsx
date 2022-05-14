const initialState = [
  {
    id: 0,
    name: "Hassan khan",
    number: 12345327890,
    email: "asd@gmail.com",
  },
  {
    id: 1,
    name: "Arsalan khan",
    number: 12345327890,
    email: "qwert@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const Updatestate = Array.from(state).map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = Updatestate;
      return state;
    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
