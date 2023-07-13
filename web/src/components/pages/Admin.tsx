import { useEffect, useState } from "react";
import { socket } from "../../socket";
import { getCurrentTime } from "../../lib/utils";

const Admin = () => {
	//Room State
	const [room, setRoom] = useState("");

	// Messages States
	const [message, setMessage] = useState("");
	const [messageReceived, setMessageReceived] = useState("");

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("join_room", room);
		}
	};

	const sendMessage = () => {
		socket.emit("send_message", { message, time: getCurrentTime(), room });
	};

	useEffect(() => {
		socket.on("receive_message", (data: any) => {
			setMessageReceived(data.message);
		});
	}, [socket]);

	return (
		<div className="p-2">
			<h1>Send Commentary</h1>
			<div className="space-y-5">
				<div className="space-x-2">
					<input
						placeholder="Room Number..."
						onChange={(event) => {
							setRoom(event.target.value);
						}}
						className="border"
					/>
					<button onClick={joinRoom} className="bg-slate-200 p-2 rounded-sm">
						{" "}
						Join Room
					</button>
				</div>
				<div className="space-x-2">
					<textarea
						placeholder="Message..."
						onChange={(event) => {
							setMessage(event.target.value);
						}}
						className="border"
					/>
					<button onClick={sendMessage} className="bg-slate-200 p-2 rounded-sm">
						{" "}
						Send Message
					</button>
				</div>
				<h1> Message:</h1>
				{messageReceived}
			</div>
		</div>
	);
};

export default Admin;
