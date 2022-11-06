export default function AudioList({ $target, initialState, filter }) {
  const $audioList = document.createElement("ul");
  $target.appendChild($audioList);

  this.state = initialState;

  this.render = () => {
    $audioList.innerHTML = `
      ${this.state
        .map(
          (audio) =>
            `
          <li class="audio" key="${audio.id}">
           <h1 class="audioTitle">${audio.title}</h1>
           <audio controls src="${audio.url}"></audio>
          </li>
        `
        )
        .join("")}`;
  };
}
