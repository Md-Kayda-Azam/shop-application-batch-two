import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
// create brower router
export const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
]);
