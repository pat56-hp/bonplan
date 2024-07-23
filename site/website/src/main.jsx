import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ScriptLoader from "./scripts/ScriptLoader";
import router from "./router";
import {AuthContextProvider} from "./contexts/AuthContextProvider";
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
              <RouterProvider router = {router} />
              <ScriptLoader />
          </AuthContextProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
