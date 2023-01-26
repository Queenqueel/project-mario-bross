const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function changeModal() {
    modal.classList.toggle("open-modal");
}

buttonTrailer.addEventListener("click", () => {
    changeModal();
    video.setAttribute("src", linkVideo);
})

closeModal.addEventListener("click", () => {
    changeModal();
    video.setAttribute("src", "");
})
