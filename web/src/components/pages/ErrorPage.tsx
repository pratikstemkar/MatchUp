import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id="error-page"
			className="flex flex-col space-y-2 bg-slate-200 justify-center items-center min-h-screen"
		>
			<h1 className="text-4xl font-extrabold">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i className="text-red-500">{error.statusText}</i>
			</p>
		</div>
	);
}
