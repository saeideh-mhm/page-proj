let secondbtn = document.getElementById("secondbtn")

let maininput = document.getElementById("maininput")

let secdic = document.getElementById("secdic")

secdic.addEventListener("click", funremove)
function funremove(event) {
    event.target.remove()
}

let firstbtn = document.getElementById("firstbtn")

let thirdbtn = document.getElementById("thirdbtn")

let abd = document.getElementById("abd")

secondbtn.addEventListener("click", btnsecond)

// function btnsecond() {
//     let maininputvalue = maininput.value
//     if (maininputvalue) {
//         let newdiv = document.createElement("div")
//         newdiv.innerHTML = maininputvalue
//         secdic.append(newdiv)
//         newdiv.style.backgroundColor = maininput.style.backgroundColor
//         newdiv.style.color = maininput.style.color
//         newdiv.style.marginTop = "10px"
//         newdiv.className = "rounded-5 col-8 text-center"
//         newdiv.style.padding = "3px"
//         maininput.value = " "
//         console.log("s")
//     }
// }
maininput.addEventListener("keydown", downkey)

function downkey(event) {
    if (event.keyCode == 13) {
        btnsecond()
    }
}
// -----------------------------------------------------------------------
firstbtn.addEventListener("click", btnfirst)

function btnfirst() {
    abd.style.display = "inline"

}
// --------------------------------------------
// let smh =document.getElementById("smh")
// let redd = document.getElementById("redd")
// redd.addEventListener("mousemove",redmouse)
// function redmouse() {
//    maininput.style.backgroundColor ="red"
//    firstbtn.style.backgroundColor ="red"
//    secondbtn.style.backgroundColor ="red"
// }
// // ---------------------------------------------------------
let colorBox = document.querySelectorAll(".colorbox")

colorBox.forEach(function (colorBox) {
    colorBox.addEventListener("click", function (event) {

        let maincolor = event.target.style.backgroundColor

        maininput.style.backgroundColor = maincolor
        secondbtn.style.backgroundColor = maincolor
        firstbtn.style.backgroundColor = maincolor
        thirdbtn.style.backgroundColor = maincolor

    })
})
// --------------------------------------------------------------------
thirdbtn.addEventListener("click", btnthird)
function btnthird() {
    maininput.value = ""
    maininput.style.backgroundColor = "#fff"
    secondbtn.style.backgroundColor = "#fff"
    firstbtn.style.backgroundColor = "#fff"
    thirdbtn.style.backgroundColor = "#fff"
    maininput.style.Color = "black"
}
// ------------------------------------------------------------------------------
let colorBoxx = document.querySelectorAll(".colorboxx")

colorBoxx.forEach(function (colorBoxx) {
    colorBoxx.addEventListener("click", function (event) {

        let maincolorr = event.target.style.color

        maininput.style.color = maincolorr
      

    })
})

let thirdcolorbox = document.querySelectorAll(".thirdcolorbox")

thirdcolorbox.forEach(function (thirdcolorbox) {
    thirdcolorbox.addEventListener("click", function (event) {

        let mainstyle = event.target.style.fontStyle

        maininput.style.fontStyle = mainstyle
       

    })
})

let forthcolorbox = document.querySelectorAll(".forthcolorbox")

forthcolorbox.forEach(function (forthcolorbox) {
    forthcolorbox.addEventListener("click", function (event) {

        let mainstyleone = event.target.style.fontWeight

        maininput.style.fontWeight= mainstyleone
        

    })
})

 

// trim method for delet for space

// function trim(varone){
//     return varone.trim()

// }

function btnsecond() {
    let maininputvalue = maininput.value
    if (maininputvalue) {
        let newdiv = document.createElement("div")
        // newdiv.innerHTML = trim(maininput.value)
        newdiv.innerHTML = maininputvalue.trim().toLowerCase()

        secdic.append(newdiv)
        newdiv.style.backgroundColor = maininput.style.backgroundColor
        newdiv.style.color = maininput.style.color
        newdiv.style.fontStyle = maininput.style.fontStyle
        newdiv.style.fontWeight = maininput.style.fontWeight
        newdiv.style.marginTop = "10px"
        newdiv.className = "rounded-5 col-8 text-center"
        newdiv.style.padding = "3px"
        maininput.value = " "
        console.log("s")
    }
}
