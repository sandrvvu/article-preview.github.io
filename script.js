let shareBtn = document.querySelector(".share-btn");
let shareModal = document.querySelector(".share-modal");

shareBtn.addEventListener("click", function () {
  shareModal.classList.toggle("disabled");
});
