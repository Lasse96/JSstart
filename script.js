const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

button.addEventListener("click", additem)

function additem(){
    if (input.value.length > 0) {
        ul.innerHTML += `<li>${input.value}</li>`
        input.value = "";
    }
    else{
        throw Error ("Dette er en feilmelding")
    }
}

// console.log("Tirsdag");
// console.log(+ (3*6));
// window.alert("Lasse");