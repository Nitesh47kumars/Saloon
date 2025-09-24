import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Layout'
import Home from "./Home"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
