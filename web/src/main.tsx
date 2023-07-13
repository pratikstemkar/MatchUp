import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Match from "./components/pages/Match.tsx";
import Score from "./components/pages/Score.tsx";
import Home from "./components/pages/Home.tsx";
import Schedule from "./components/pages/Schedule.tsx";
import Teams from "./components/pages/Teams.tsx";
import Stats from "./components/pages/Stats.tsx";
import Rankings from "./components/pages/Rankings.tsx";
import Admin from "./components/pages/Admin.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />} errorElement={<ErrorPage />}>
			<Route path="/" element={<Home />} />
			<Route path="match/:id" element={<Match />} />
			<Route path="score" element={<Score />} />
			<Route path="schedule" element={<Schedule />} />
			<Route path="teams" element={<Teams />} />
			<Route path="stats" element={<Stats />} />
			<Route path="rankings" element={<Rankings />} />
			<Route path="admin" element={<Admin />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
