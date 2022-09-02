// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { setupStore } from '../redux/configureStore';

// export function renderWithProviders(
//   ui,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = setupStore(preloadedState),
//     ...renderOptions
//   } = {},
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

// The invoke function runs our middleware in the same way Redux does.
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunkMiddleware(store)(next)(action);

  return { store, next, invoke };
};

//   perform test
describe('testing for Middleware', () => {
  test('passes through non-function action', () => {
    const { next, invoke } = create();
    const action = { type: 'TEST' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  test('calls the function', () => {
    const { invoke } = create();
    const fn = jest.fn();
    invoke(fn);
    expect(fn).toHaveBeenCalled();
  });

  test('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH');
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
  });

  test('passes dispatch and getState', () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH');
      getState();
    });
    expect(store.getState).toHaveBeenCalled();
  });
});
