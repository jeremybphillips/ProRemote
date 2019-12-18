const socket;
const host = "192.168.5.150";
const port = "50001";
const password = "control";
const slideIndex;
const activePresentation;
const activePlaylist;
const playlists;
const controlling = false;
const libraries = [];

function err(s) {
	document.getElementById("errbox").innerHTML = s;
	return false;
  }

  function check_socket() {
	if (!socket) return err("SOCKET NOT CONNECTED");
	if (socket.readyState != 1) return err("SOCKET NOT READY");
	return true;
  }

  function setup() {
	connect();
	listen();
  }

  function connect() {
	socket = new WebSocket(`ws://${host}:${port}/remote`);
	listen();
  }

  function emit(obj) {
	var json = JSON.stringify(obj);
	if (check_socket()) socket.send(json);
	else return err("SOCKET EMIT FAILED");
  }

  function listen() {
	socket.onmessage = function(event) {
	  var msg = JSON.parse(event.data);
	  console.log(msg);

	  switch (msg.action) {
		case "authenticate":
		  controlling = msg.controller == 1;
		  break;
		case "libraryRequest":
		  libraries = msg.library;
		  break;
		case "playlistRequestAll":
		  playlists = msg.playlistAll;
		  break;
		case "presentationSlideIndex":
		  slideIndex = msg.slideIndex;
		  break;
		case "presentationTriggerIndex":
		  slideIndex = msg.slideIndex;
		  activePresentation = msg.presentationPath;

		  //document.getElementById("userlistbox").innerHTML = ul;
		  break;
		case "presentationCurrent":
		  break;
	  }
	};
  }

  function authenticate() {
	emit({
	  action: "authenticate",
	  protocol: "600",
	  password: password
	});
  }

  function get_library() {
	emit({
	  action: "libraryRequest"
	});
  }

  function get_playlists() {
	emit({
	  action: "playlistRequestAll"
	});
  }

  function get_playlist() {}

  function get_presentation(path) {
	emit({
	  action: "presentationRequest",
	  presentationPath: path,
	  presentationSlideQuality: 25
	});
  }

  function get_current_presentation() {
	emit({
	  action: "presentationCurrent",
	  presentationSlideQuality: 25
	});
  }

  function get_current_slide() {
	emit({ action: "presentationSlideIndex" });
  }

  function trigger_slide(n, path) {
	emit({
	  action: "presentationTriggerIndex",
	  slideIndex: n,
	  presentationPath: path
	});
  }