import React from 'react'
import ReactDOM from 'react-dom/client'
import Dic from './Pages/Dic'
import './App.css'
import { WordProvider } from './context/WordContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WordProvider>
      <Dic />
    </WordProvider>
  </React.StrictMode>
)
