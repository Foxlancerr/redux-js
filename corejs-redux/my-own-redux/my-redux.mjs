export default function createStore(reducer) {
  let state;
  let listnerArr = [];
 
  return {
    dispatch(action) {
      state = reducer(state, action);
      listnerArr.forEach((listner) => listner());
    },
    getState() {
      return state;
    },
    subscribe(listner) {
      listnerArr.push(listner);
    },
  };

 
}
