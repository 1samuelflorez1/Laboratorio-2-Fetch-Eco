import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import ListPost from "../pages/ListsPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App
        },
        {
            path: "/listpost",
            Component: ListPost
        }
    ]
)

export default router