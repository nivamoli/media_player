import MediaPlayer from "./MediaPlayer.js"; 
import AutoPlay from "../plugins/AutoPlay.js"; // al usar scripts con type module debemos definir la extensión.
import AutoPause from "../plugins/AutoPause.js"

const video = document.querySelector("video")
const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause()]});

const button = document.getElementById("playButton")
button.onclick = () => player.togglePlay();

const muteButton = document.getElementById('muteButton');
muteButton.onclick = () => player.toogleMute();



