import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Comments from "./Components/Comments/Comments";
import Detailed from "./Components/Detailed/Detailed";
import HomeComponents from "./Components/HomeComponents/HomeComponents";
import Login from "./pages/Login/Login";
import React, { Suspense } from 'react';
import Loading from "./Components/Loading/Loading";
import YouTubeVideo from "./YouTubeVideo";
import NotFound from "./NotFound";
const Home = React.lazy(() => import("./Components/Home/Home"))
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>,
      children: [
        {
          path: "/",
          element: <HomeComponents />
        },
        {
          path: "/announcement/comment/:id",
          element: <Comments />
        },
        {
          path: "/detailed/:name/:id",
          element: <Detailed />
        },
        {
          path: "/detailed/:name/:id/all",
          element: <Detailed />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <NotFound />
    }

  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
