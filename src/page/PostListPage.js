import PostList from "../components/PostList.js";
import LoadBtn from "../components/LoadBtn.js";
import GroupBtn from "../components/GroupBtn.js";
import SortBtn from "../components/SortBtn.js";

export default function PostListPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "postListPage";
  $target.appendChild($page);

  this.state = {
    postList: [],
    isSortAlphabet: false,
    isGroupByUserId: false,
  };

  this.setState = (newState) => {
    this.state = {
      ...newState,
      postList: newState.postList || [],
    };
    this.render();
  };

  this.render = () => {
    $page.innerHTML = `
    <div class="postWrapper"></div>
    `;
    const $postWrapper = document.querySelector(".postWrapper");

    new LoadBtn({
      $target: $postWrapper,
      handlePosts,
    });
    new SortBtn({
      $target: $postWrapper,
      handleSort,
    });
    new GroupBtn({
      $target: $postWrapper,
      handleGroupByUserId,
    });
    new PostList({
      $target: $page,
      initialState: this.state?.postList || [],
    }).render();
  };
}
