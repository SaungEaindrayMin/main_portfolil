
const hambugerContainerTag = document.querySelector(".humbugerContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");

hambugerContainerTag.addEventListener("click", () => {
    if(hambugerContainerTag.classList.contains("isOpened")){
        overlayMenuTag.classList.remove("showOverlay");
        line2Tag.classList.remove("hideLine2");
        line1Tag.classList.remove("rotatePlus45deg");
        line3Tag.classList.remove("rotateMinus45deg");
        hambugerContainerTag.classList.remove("isOpened");
    }else{
        overlayMenuTag.classList.add("showOverlay");
        line2Tag.classList.add("hideLine2");
        line1Tag.classList.add("rotatePlus45deg");
        line3Tag.classList.add("rotateMinus45deg");
        hambugerContainerTag.classList.add("isOpened");
    }
})