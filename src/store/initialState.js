const getFromStorage = () => {
  const data = localStorage.getItem('list-module-3d');
  if (data) {
    return JSON.parse(data);
  }
  return false;
};

export const initialState = {
  list: getFromStorage() || [
    {
      id: 1,
      Song: 'Brainstorm',
      Singer: 'Arctic Monkeys',
    },
    {
      id: 2,
      Song: 'The Golden Age',
      Singer: 'The Asteroids Galaxy Tour',
    },
    {
      id: 3,
      Song: 'Octopus',
      Singer: 'The Barons Of Tang',
    },
    {
      id: 4,
      Song: 'It is bigger on the inside',
      Singer: 'Voltaire',
    },
    {
      id: 5,
      Song: 'The Greatest Show Unearthed',
      Singer: 'Creature Feature',
    },
    {
      id: 6,
      Song: 'Perfect World',
      Singer: 'Billy Talent',
    },
  ],
  formValue: {
    song: '',
    singer: '',
  },
  searchValue: '',
  idEdit: 0,
};
