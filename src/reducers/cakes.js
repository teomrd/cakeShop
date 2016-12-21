import cakeData from '../sampleData';

const cakes = (state = cakeData, action) => {
  switch (action.type) {
    case 'FETCH_CAKES':
      return state;
    case 'RECEIVE_CAKES':
      return state;
    default:
      return state;
  }
};

export default cakes;
