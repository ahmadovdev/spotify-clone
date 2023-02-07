import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Root from "./root";
import { Provider } from "react-redux";
import {store} from './redux/store';


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Root />
    </Provider>
);
