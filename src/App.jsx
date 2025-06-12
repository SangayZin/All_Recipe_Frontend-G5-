import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Signup from "./pages/Signup";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='flex'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);

}

export default App;
