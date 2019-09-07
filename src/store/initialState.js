const getFromStorage = () => {
  const data = localStorage.getItem('filling-form-3d');
  if (data) {
    return JSON.parse(data);
  }
  return false;
};

export const initialState = getFromStorage() || {
  list: [
    {
      nameSong: 'name',
      nameSinger: 'srhsryt',
    },
    {
      nameSong: 'name',
      nameSinger: 'rsthrthrts',
    },
    {
      nameSong: 'name',
      nameSinger: 'fhtsrthrs',
    },
  ],
};
