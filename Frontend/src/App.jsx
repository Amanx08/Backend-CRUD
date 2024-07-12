import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Getuser from './components/Getuser/Getuser'
import Adduser from './components/Adduser/Adduser'

function App() {

    const route = createBrowserRouter([

        {
            path: "/",
            element: <Getuser />,
        },

        {
            path: "/edit",
            element: "yellow",
        },

        {
            path: "/add",
            element: <Adduser />,
        },

        {
            path: "/delete",
            element: "Home delete",
        }
    ])


    return (
        <>
            <div className='App'>

                <RouterProvider router={route}></RouterProvider>

            </div>
        </>
    )
}

export default App
