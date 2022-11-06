export default function LoadBtn({ $target, handlePosts }) {
  const $loadBtn = document.createElement("button");
  $loadBtn.innerHTML = "Click Posts";
  $target.appendChild($loadBtn);
  $loadBtn.addEventListener("click", handlePosts);
}
