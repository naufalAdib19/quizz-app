import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import QuizPage from './pages/quiz.jsx'
import GetQuestion from './service/getQuestion'
import Navbar from './components/navbar'
import IdxProvider from './helper/Indexer'
import Debug from './helper/debug'
import LengthCountdown from './components/countdownLength'
import Loaders from './components/loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/quiz',
    element: <QuizPage/>
  },
  {
    path: '/tes',
    element: <Loaders/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(   
    <div>
      {localStorage.getItem('LOGIN') !== null ?
          <>
            {window.location.href !== 'http://localhost:5173/login' ? <Navbar/> : null}
            <IdxProvider> 
              <RouterProvider router={router} />
            </IdxProvider>   
          </> :
          <LoginPage/>
      }    
    </div>   
)
