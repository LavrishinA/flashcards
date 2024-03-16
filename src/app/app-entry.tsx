import React from 'react'
import { Provider } from 'react-redux'

import { Router } from '@/app/app-router'
import { store } from '@/app/app-store'
import ReactDOM from 'react-dom/client'

import '../shared/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
