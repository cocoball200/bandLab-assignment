import PostList from "../components/PostList.js";
import LoadBtn from "../components/LoadBtn.js";
import GroupBtn from "../components/GroupBtn.js";
import SortBtn from "../components/SortBtn.js";
import { fetchPosts } from "../lib/api.js";

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

  const handlePosts = async () => {
    const posts = await fetchPosts("posts");
    this.setState({
      ...this.state,
      postList: posts,
    });
  };

  const handleSort = () => {
    if (!this.state.isSortAlphabet) {
      const result = this.state.postList.sort((x, y) =>
        x.title.localeCompare(y.title)
      );
      this.setState({
        ...this.state,
        isSortAlphabet: !this.state.isSortAlphabet,
        postList: result,
      });
    } else {
      const result = this.state.postList.sort((x, y) =>
        y.title.localeCompare(x.title)
      );
      this.setState({
        ...this.state,
        isSortAlphabet: !this.state.isSortAlphabet,
        postList: result,
      });
    }
  };

  const handleGroupByUserId = () => {
    if (!this.state.isGroupByUserId) {
      const result = this.state.postList.sort((x, y) => x.userId - y.userId);
      this.setState({
        ...this.state,
        isGroupByUserId: !this.state.isGroupByUserId,
        postList: result,
      });
    } else {
      const result = this.state.postList.sort((x, y) => y.userId - x.userId);
      this.setState({
        ...this.state,
        isGroupByUserId: !this.state.isGroupByUserId,
        postList: result,
      });
    }
  };

  this.render = () => {
    $page.innerHTML = `
    <div class="postWrapper"></div>
    `;
    const $postWrapper = document.querySelector(".postWrapper");
    const $filter = document.createElement("div");
    const $loadWrapper = document.createElement("div");
    $loadWrapper.className = "loadWrapper";
    $filter.className = "filterWrapper";
    $postWrapper.appendChild($loadWrapper);
    $postWrapper.appendChild($filter);

    if (this.state.postList?.length <= 0) {
      $filter.style.display = "none";
    }

    new LoadBtn({
      $target: $loadWrapper,
      handlePosts,
    });
    new SortBtn({
      $target: $filter,
      handleSort,
    });
    new GroupBtn({
      $target: $filter,
      handleGroupByUserId,
    });
    new PostList({
      $target: $page,
      initialState: this.state?.postList || [],
    }).render();
  };
}
