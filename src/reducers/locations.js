const locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        {
          location: action.location,
        },
      ];
    default:
      return state;
  }
};

export default locations;
