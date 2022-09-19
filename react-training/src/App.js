import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import UseStatePage from "./pages/use-state";
import UseEffectPage from "./pages/use-effect";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <div>
                        <Link to="/use-state">Use state</Link>
                    </div>
                    <div>
                        <Link to="/use-effect">Use effect</Link>
                    </div>
                </>
            ),
        },
        {
            path: "/use-state",
            element: <UseStatePage />,
        },
        {
            path: "/use-effect",
            element: <UseEffectPage />,
        },
    ]);
    return (
        <div style={{fontSize: 60}}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
