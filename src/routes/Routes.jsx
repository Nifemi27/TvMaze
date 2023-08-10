import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from '../components/Root'
import Home from '../pages/Home'
import TvDetail from "../pages/TvDetail"
import Search from '../pages/search'

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children: [
                {
                path:'/',
                element:<Home/>
                },
                {
                  path: 'tvshows/:id',
                  element: <TvDetail/>,
                },
                {
                  path: 'Search',
                  element: <Search/>,
                },
            ]
        },
    ])
  return (
    <>
    <RouterProvider router= {router} />
    </>
  )
}
