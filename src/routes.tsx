import { createBrowserRouter } from "react-router-dom";
import { Web } from "./Web";

export const router = createBrowserRouter([{

  path: '/',
  element: <Web />

}
]);