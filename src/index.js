// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';

import { worker } from "./mocks/browser";
import Theme from "./Theme";
worker.start();

ReactDOM.render(
<ThemeProvider theme={Theme}>
<App />
</ThemeProvider>
,document.getElementById("root"));
