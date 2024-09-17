import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './About'
import Projects from './Projects'
// import Contact from './Contact'
// import Resume from './Resume'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <About />
        },
        {
          path: 'Projects',
          element: <Projects />
        },
        {
          path: 'Contact',
          element: <Contact />
        },
        {
          path: 'Resume',
          element: <Resume />
        }
      ]
    },
  ])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)