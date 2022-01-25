// scroll bar
import "simplebar/src/simplebar.css";

import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

//
import App from "./App";
// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </HelmetProvider>,
  document.getElementById("root")
);
