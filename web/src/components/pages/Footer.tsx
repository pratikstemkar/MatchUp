import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="w-full flex items-center justify-center p-2 text-slate-500">
				<div className="font-mono text-sm m-auto">
					<span>
						Developed by{" "}
						<Link to="https://pratikstemkar.in" className="underline">
							Pratik Temkar
						</Link>
					</span>
					{" • "}
					<span>
						Code available on{" "}
						<Link to="https://github.com/matchup-web" className="underline">
							GitHub
						</Link>
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
