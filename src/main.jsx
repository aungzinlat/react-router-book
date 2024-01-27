import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);
