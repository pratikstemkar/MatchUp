import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="flex flex-col justify-between min-h-screen bg-slate-200">
				<div>
					<Navbar />
					<main className="max-w-5xl m-auto bg-white">
						<Outlet />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
