let main = document.querySelector(".main")
let range = document.querySelector("#range")
let pc = document.querySelector("#pc")

for (let i = 0; i < 100; i++) {
    let span = document.createElement('span')
    span.style.transform = `rotate(${i / 100 * 360}deg)`
    main.appendChild(span);
}

let chColor = val => {
    for (let i = 0; i < main.children.length; i++) {
        if (i < val) {
            main.children[i].style.setProperty(`--bg`, `hsl(${i / 100 * 360},100%,50%)`)
            main.children[i].style.setProperty(`--sg`, `hsl(${i / 100 * 360},100%,50%)`)
        }
        else {
            main.children[i].style.setProperty(`--bg`, 'black')
            main.children[i].style.setProperty(`--sg`, `transparent`)
        }
    }
}

range.addEventListener("input", () => {
    range.style.backgroundSize = `${range.value}% 100%`
    pc.innerHTML = `${range.value}`
    chColor(range.value)
})
