/* reducer to hold global state for things such as menu */
const defaultState = {
  hello: 'hello world',
};

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
