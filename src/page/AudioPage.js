import AudioList from "../components/AudioList.js";
import { AUDIOLIST } from "../lib/audio.js";

export default function PostListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "audioPage";
  $target.appendChild($page);

  this.render = () => {
    $page.innerHTML = `<div class="audioWrapper"></div>`;
    new AudioList({
      $target: $page,
      initialState: AUDIOLIST,
    }).render();
  };
}
