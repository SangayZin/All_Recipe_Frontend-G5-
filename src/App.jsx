import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar at the top */}
            <Navbar />
            
            {/* Main content area with Sidebar and page content */}
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
