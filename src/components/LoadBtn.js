export default function LoadBtn({ $target, handlePosts }) {
  const $loadBtn = document.createElement("button");
  $loadBtn.innerHTML = "Click Posts";
  $loadBtn.className = "postBtn";
  $loadBtn.style.background = "#fce205";
  $loadBtn.style.color = "#6e6e6e";
  $target.appendChild($loadBtn);
  $loadBtn.addEventListener("click", handlePosts);
}
