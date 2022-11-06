export default function SortBtn({ $target, handleSort }) {
  const $sortBtn = document.createElement("button");
  $sortBtn.innerHTML = "Sort Alphabet";
  $sortBtn.style.marginRight = "10px";
  $target.appendChild($sortBtn);
  $sortBtn.addEventListener("click", handleSort);
}
