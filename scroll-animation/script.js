const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

//first call of function shows first boxes that fit the screen
checkBoxes()
//if removed, all boxes show up ONLY AFTER scrolling starts

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}