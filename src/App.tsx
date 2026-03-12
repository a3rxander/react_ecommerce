import { RouterProvider } from "react-router-dom"
import { AppRouter } from "./app.router";

export const App = () => {
    return (
        <RouterProvider router={AppRouter} />
    );
}
