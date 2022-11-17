import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { colorReducer } from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(colorReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
