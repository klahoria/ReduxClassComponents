import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import { store } from "./store";
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
