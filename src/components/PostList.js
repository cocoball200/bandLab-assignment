export default function PostList({ $target, initialState }) {
  const $postList = document.createElement("ul");
  $target.appendChild($postList);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    $postList.innerHTML = `
      ${this.state
        .map(
          (post) =>
            `
           <li class="post" data-post-id="${post.userId}" key="${post.id}">
           <h2 class="title">${post.title}</h2> 
           <h3 class="content">${post.body}</h3>
           </li>
        `
        )
        .join("")}`;
  };
}
