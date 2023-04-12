import { RouterProvider } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";

function App() {
  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
