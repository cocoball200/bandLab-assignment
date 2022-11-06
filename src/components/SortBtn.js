export default function SortBtn({ $target, handleSort }) {
  const $sortBtn = document.createElement("button");
  $sortBtn.innerHTML = "Sort Alphabet";
  $target.appendChild($sortBtn);
  $sortBtn.addEventListener("click", handleSort);
}
