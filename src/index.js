import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const render = Component =>
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById("root")
  );

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

render(App);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
