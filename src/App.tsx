import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LagerOverview from "./pages/LagerOverview";

function App() {
    return (
        <Router>
            <Routes>
                {/* Root-Route für die Startseite */}
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/LagerOverview" element={<LagerOverview />} />
            </Routes>
        </Router>
    );
}

export default App;
