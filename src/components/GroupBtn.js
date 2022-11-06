export default function GroupBtn({ $target, handleGroupByUserId }) {
  const $userIdGroupBtn = document.createElement("button");
  $userIdGroupBtn.innerHTML = "Group BY UserId";
  $target.appendChild($userIdGroupBtn);
  $userIdGroupBtn.addEventListener("click", handleGroupByUserId);
}
