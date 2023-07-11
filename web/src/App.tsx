import Navbar from "./components/pages/Navbar";
import MatchCard from "./components/pages/MatchCard";
import Content from "./components/pages/Content";
import Footer from "./components/pages/Footer";

function App() {
	return (
		<>
			<div className="flex flex-col justify-between min-h-screen bg-slate-200">
				<div>
					<Navbar />
					<main className="max-w-5xl m-auto bg-white">
						<MatchCard />
						<Content />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
