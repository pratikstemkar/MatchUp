const express = require("express");
var cors = require("cors");
const http = require("http");
const app = express();
const { Server } = require("socket.io");
const port = 3000;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User Connected: ${socket.id}`);

	socket.on("join_room", (data) => {
		socket.join(data);
	});

	socket.on("send_message", (data) => {
		socket.to(data.room).emit("receive_message", data);
	});
});

server.listen(port, () => {
	console.log(`listening to ${port} ...`);
});
