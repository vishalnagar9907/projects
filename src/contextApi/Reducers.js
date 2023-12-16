export const carReducer = (state, action) => {
  console.log(action,"action")
    switch (action.type) {
      case "ADD_CAR":
        return { products: [{...action.payload},...state.products] };
      case "REMOVE_CAR":
        return {
          products: state.products.filter((c) => c.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  