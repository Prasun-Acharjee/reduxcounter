import React from "react";
import './App.css';
import store from "./Store";
import { Provider } from "react-redux";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
