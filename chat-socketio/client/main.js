const socket = io.connect("http://192.168.0.10:6677", { "forceNew": true });
const sendButton = document.querySelector("button");
const textarea = document.querySelector("textarea");

// listening socket
socket.on("messages", (data) => {
	renderMessages(data);
});

const renderMessages = (data) => {
	let html = data.map((message, index) => {
		return(`
			<div class="message">
				<strong>${message.nickname}</strong>
				<p>${message.text}</p>
			</div>
		`);
	}).join(" ");

	let actualMessages = document.querySelector("#messages");
	actualMessages.innerHTML = html;
	actualMessages.scrollTop = actualMessages.scrollHeight;
};

const sendMessage = () => {
	let message = {
		nickname: document.querySelector("#nickname").value,
		text: document.querySelector("#text").value
	};
	document.querySelector("#nickname").style.display = "none";
	document.querySelector("#text").value = "";
	socket.emit("add-message", message);
};

// events
sendButton.addEventListener("click", (event) => {
	event.preventDefault();
	sendMessage();
});

textarea.addEventListener("keyup", event => {
	const key = event.keyCode;
	if (key == 13) sendMessage();
});
