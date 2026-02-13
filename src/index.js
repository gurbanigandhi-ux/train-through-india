import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import trainBg from "./trainwindow.jpg";

document.body.style.margin = "0";
document.body.style.fontFamily = "system-ui, sans-serif";
document.body.style.backgroundImage = `url(${trainBg})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to keep this:
reportWebVitals();
