import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom'
import ScriptLoader from "./scripts/ScriptLoader";
import router from "./router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    <ScriptLoader />
  </React.StrictMode>,
)
