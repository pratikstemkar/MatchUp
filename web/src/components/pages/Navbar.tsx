import { Link } from "react-router-dom";
import Navlink from "./Navlink";

const Navbar = () => {
	return (
		<>
			<header>
				<nav className="w-full  flex justify-center border-b-2 ">
					<div className="max-w-5xl m-auto w-full flex items-center p-2 flex-col md:flex-row bg-white ">
						<Link to="/" className="hover:text-blue-500">
							<h1 className="text-2xl font-extrabold tracking-tight">
								MatchUp
							</h1>
						</Link>
						<div className="flex w-full justify-center md:justify-normal md:flex-row-reverse">
							<ul className="inline-flex space-x-4">
								<li className="hover:underline">
									<Navlink params={{ link: "Score" }} />
								</li>
								<li className="hover:underline">
									<Navlink params={{ link: "Schedule" }} />
								</li>
								<li className="hover:underline">
									<Navlink params={{ link: "Teams" }} />
								</li>
								<li className="hover:underline">
									<Navlink params={{ link: "Stats" }} />
								</li>
								<li className="hover:underline">
									<Navlink params={{ link: "Rankings" }} />
								</li>
								<li className="hover:underline">
									<Navlink params={{ link: "Admin" }} />
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
