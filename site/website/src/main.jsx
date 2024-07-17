import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom'
import ScriptLoader from "./scripts/ScriptLoader";
import router from "./router";
import {AuthContextProvider} from "./contexts/AuthContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContextProvider>
          <RouterProvider router = {router} />
          <ScriptLoader />
      </AuthContextProvider>

  </React.StrictMode>,
)
