export type Event = {
  _id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  user: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export type EventFormData = {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
};
export type UserFormData = {
  name: string;
  email: string;
  password: string;
};
