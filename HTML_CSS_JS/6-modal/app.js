

const openBtn = document.querySelector(".model-btn");
const modelOverlay =  document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function(){
    modelOverlay.classList.add("open-modal")
})

closeBtn.addEventListener("click", function(){
    modelOverlay.classList.remove("open-modal")
})