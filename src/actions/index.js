export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const saveUserEmail = (email) => ({
  type: 'SET_USER_EMAIL',
  payload: email,
});
