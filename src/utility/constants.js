export const USER_DETAILS = [
  {
    type: "text",
    id: "name",
    className: "Enter name",
    name: "name",
    placeHolder: "name",
  },
  {
    type: "email",
    placeHolder: "Enter email",
    id: "email",
    className: "email",
    name: "email",
  },
  {
    placeHolder: "Enter message",
    type: "text",
    id: "message",
    className: "message",
    name: "message",
  },
];

export const INITIAL_USER_DETAILS_STATE = {
  name: "",
  email: "",
  message: "",
};
