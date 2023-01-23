import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Root from "./routes/Root";
import Contact from "./routes/Login";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import ErrorPage from "./error-page";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]);

ReactDOM.render(<App />, document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
