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
import {Toaster} from "react-hot-toast";
import ScrollToTop from './components/ScrollToTop';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(            
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
              <RouterProvider router = {router}>
                <ScriptLoader />
              </RouterProvider>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    containerStyle={{
                        zIndex : '99999999999999'
                    }}
                    toastOptions={{
                        style: {
                            border: '1px solid #e04f67',
                            borderRadius: '10px',
                        },
                        success: {
                            theme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        },
                    }}
                />
          </AuthContextProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
