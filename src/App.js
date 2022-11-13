import PostListPage from "./page/PostListPage.js";
import AudioPage from "./page/AudioPage.js";
import { init } from "./lib/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      new PostListPage({ $target }).render();
    } else if (pathname === "/audio") {
      new AudioPage({ $target }).render();
    } else {
      new PostListPage({ $target }).render();
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
