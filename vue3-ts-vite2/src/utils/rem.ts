import { stringifyQuery } from "vue-router"

const baseSize: number = 37.5

function setRem() {
    const scale: number = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

setRem()

window.onresize = function () {
    setRem()
}
