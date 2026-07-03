const button = document.getElementById("generateBtn");
const palette = document.getElementById("palette");

button.addEventListener("click",generateColors)


function generateColors(){

    palette.innerHTML = "";

    for(let i=0; i<14; i++){

        const color = randomColor();

        const box = document.createElement("div");

        box.classList.add("colorBox");

        box.style.backgroundColor = color;

        box.textContent = color;

        palette.appendChild(box);
    }
}


function randomColor(){


    const letters = "0123456789ABCDEF";

    let color = "#";

    for(let i=0; i<6; i++){

        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

generateColors();