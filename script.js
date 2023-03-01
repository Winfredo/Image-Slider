const buttons = document.queryAll(".btn")
const imgDiv = document.querySelector(".main-container")


function randomPic (){
    const pictures = [
        "images/pic1",
        "images/pic2",
        "images/pic3",
        "images/pic4",
        "images/pic5",
        "images/pic6",
    ]
} 

buttons.forEach(function (button) {
    button.addEventListener("click", function (e){
        if (button.classList.contains('btn-left')){
            counter--
            if(counter < 0){
                counter = pictures.length - 1
            }
            imgDiv.style.background = `url/${pictures[counter].jpeg}`
        }

        if (button.classList.contains('btn-left')){
            counter--
            if(counter < 0){
                counter = pictures.length - 1
            }
            imgDiv.style.background = `url/${pictures[counter].jpeg}`
    })
})