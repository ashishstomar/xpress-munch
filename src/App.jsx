import React, { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom"
import { useState } from 'react'
import userContext from "./common/userContext";
import { Provider } from "react-redux"
import store from "./common/store";

const Contact = lazy(() => import("./components/Contact"))
const ResMenu = lazy(() => import("./components/ResMenu"))
const About = lazy(() => import("./components/About"))
const Error = lazy(() => import("./components/Error"))


const App = () => {
  const [userName, setUserName] = useState('default user');

  //in case of auth
  useEffect(() => { 
    //Mock data in place of API call
    const data = {
      name: 'John'
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={store}>
      <userContext.Provider value={{signedInUser: userName}}>
        <div>
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>  
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