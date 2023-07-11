import { Link } from "react-router-dom";

const Content = () => {
	return (
		<>
			<div className="md:grid md:grid-cols-4">
				<div className="p-2">
					<h1 className="text-lg font-bold">Latest News</h1>
					<div className="flex flex-col  mt-2">
						<div className="border-b py-2">
							<Link to="/" className="hover:underline">
								This is the best news you've ever heard?
							</Link>
							<div className="text-sm text-slate-500">15 mins</div>
						</div>
						<div className="border-b py-2">
							<Link to="/" className="hover:underline">
								This is the best news you've ever heard?
							</Link>
							<div className="text-sm text-slate-500">15 mins</div>
						</div>
						<div className="border-b py-2">
							<Link to="/" className="hover:underline">
								This is the best news you've ever heard?
							</Link>
							<div className="text-sm text-slate-500">15 mins</div>
						</div>
						<div className="border-b py-2">
							<Link to="/" className="hover:underline">
								This is the best news you've ever heard?
							</Link>
							<div className="text-sm text-slate-500">15 mins</div>
						</div>
					</div>
				</div>
				<div className="md:col-span-2 p-2">
					<h1 className="text-xl font-extrabold">Latest Stories</h1>
					<div className="my-2">
						<img
							src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c334670/bens-an-artist-at-headingley.jpg"
							alt="a"
							className="w-full"
						/>
						<Link to="/" className="hover:underline">
							<h2 className="text-lg font-bold mt-1">
								What the hell is Ben doing?
							</h2>
						</Link>
						<p className="text-sm text-slate-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum
							neque non modi ex, nostrum pariatur animi assumenda dolore aperiam
							quasi necessitatibus accusantium explicabo voluptates, id repellat
							eius, optio a?
						</p>
					</div>
					<hr />
					<div className="my-2">
						<img
							src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c334670/bens-an-artist-at-headingley.jpg"
							alt="a"
							className="w-full"
						/>
						<Link to="/" className="hover:underline">
							<h2 className="text-lg font-bold mt-1">
								What the hell is Ben doing?
							</h2>
						</Link>
						<p className="text-sm text-slate-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum
							neque non modi ex, nostrum pariatur animi assumenda dolore aperiam
							quasi necessitatibus accusantium explicabo voluptates, id repellat
							eius, optio a?
						</p>
					</div>
				</div>
				<div className="p-2">
					<h1 className="text-xl font-extrabold">Featured Videos</h1>
					<div className="border-b py-2">
						<img
							src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c334537/wi-v-ind-players-to-watch-out.jpg"
							alt="/"
							className="w-full"
						/>
						<Link to="/" className="hover:underline">
							<h2 className="text-base font-bold">
								Watch this video now or die!
							</h2>
						</Link>
						<div className="text-sm text-slate-500">2 days</div>
					</div>
					<div className="border-b py-2">
						<img
							src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c334537/wi-v-ind-players-to-watch-out.jpg"
							alt="/"
							className="w-full"
						/>
						<Link to="/" className="hover:underline">
							<h2 className="text-base font-bold">
								Watch this video now or die!
							</h2>
						</Link>
						<div className="text-sm text-slate-500">2 days</div>
					</div>
					<div className="border-b py-2">
						<img
							src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c334537/wi-v-ind-players-to-watch-out.jpg"
							alt="/"
							className="w-full"
						/>
						<Link to="/" className="hover:underline">
							<h2 className="text-base font-bold">
								Watch this video now or die!
							</h2>
						</Link>
						<div className="text-sm text-slate-500">2 days</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
