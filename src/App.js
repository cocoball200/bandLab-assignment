export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      console.log("post page");
    } else if (pathname.indexOf("/audio") === 0) {
      console.log("audio page");
    } else {
      console.log("not found");
    }
  };

  this.route();

  window.addEventListener("popstate", this.route);
}
