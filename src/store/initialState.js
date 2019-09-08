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
      id: 1,
      Song: 'name',
      Singer: 'srhsryt',
    },
    {
      id: 2,
      Song: 'name',
      Singer: 'rsthrthrts',
    },
    {
      id: 3,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 4,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 5,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 6,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 7,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 8,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 9,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 10,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 11,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 12,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 13,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
    {
      id: 14,
      Song: 'name',
      Singer: 'fhtsrthrs',
    },
  ],
  formValue: {
    song: '',
    singer: '',
  },
  searchValue: '',
};
