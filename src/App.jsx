import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom"

const Contact = lazy(() => import("./components/Contact"))
const ResMenu = lazy(() => import("./components/ResMenu"))
const About = lazy(() => import("./components/About"))
const Error = lazy(() => import("./components/Error"))


const App = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
 )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>,
      },
      {
        path: "/contact",
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <Contact />
        </Suspense>,
      },
      {
        path: "/res/:resId",
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <ResMenu />
        </Suspense>,
      }
    ],
    errorElement: 
    <Suspense fallback={<h1>Loading...</h1>}>
        <Error />
    </Suspense>,
  },
])