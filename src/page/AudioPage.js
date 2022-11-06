import AudioList from "../components/AudioList.js";
import { AUDIOLIST } from "../lib/audio.js";

export default function AudioPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "audioPage";
  $target.appendChild($page);

  this.state = {
    audioList: AUDIOLIST,
  };

  this.setState = (newState) => {
    this.state = {
      ...newState,
      audioList: newState?.AUDIOLIST,
    };
    this.render();
  };

  this.render = () => {
    $page.innerHTML = `<div class="audioWrapper"></div>`;
    new AudioList({
      $target: $page,
      initialState: this.state.audioList,
    }).render();
  };
}
