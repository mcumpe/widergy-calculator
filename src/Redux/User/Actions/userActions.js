export const saveUser = userName => ({
    type: 'SAVE_USERNAME',
    payload: {
      user: userName,
    },
  });