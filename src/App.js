import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
