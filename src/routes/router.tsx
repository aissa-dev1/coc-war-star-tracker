import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import WarLogs from "./WarLogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/war-logs",
    element: <WarLogs />,
  },
]);

export default router;
