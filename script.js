const cursor = document.getElementById("cursor");
const random1 = document.getElementById("random1"),
    random2 = document.getElementById("random2"),
    random3 = document.getElementById("random3"),
    random4 = document.getElementById("random4"),
    random5 = document.getElementById("random5"),
    random6 = document.getElementById("random6"),
    random7 = document.getElementById("random7"),
    random8 = document.getElementById("random8");
const links = document.querySelectorAll(".interest");

const handleCursorHover = (element, addClass) => {
    element.addEventListener("mouseover", () =>
        cursor.classList[addClass]("on-interest")
    );
    element.addEventListener("mouseout", () =>
        cursor.classList.remove("on-interest")
    );
};

links.forEach((link) => handleCursorHover(link, "add"));


window.onmousemove = function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    cursor.style.left = mouseX - cursorWidth / 2 + "px";
    cursor.style.top = mouseY - cursorHeight / 2 + "px";
};

let randomPick = (ar) => {
    return ar[Math.floor(Math.random() * ar.length)];
}


let randomizeWord = () => {
    let str = "";
    let ar = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");
    return [randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar)].join("");
}

setInterval(() => {
    random1.innerText = randomizeWord();
    random2.innerText = randomizeWord();
    random3.innerText = randomizeWord();
    random4.innerText = randomizeWord();
    random5.innerText = randomizeWord();
    random6.innerText = randomizeWord();
    random7.innerText = randomizeWord();
    random8.innerText = randomizeWord();
}, 100);

let vid = document.getElementById("dead-voxel");
vid.currentTime = 66;

const audio = document.getElementById("dead-voxel");
const button = document.getElementById("volume-control-img");
let isMuted = false;

button.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        button.style.opacity = '1';
    } else {
        audio.muted = true;
        button.style.opacity = '0.5';
    }
});



const buffer1 = document.getElementById("buffer-1");
const originalInterface = document.getElementById("original-interface");

if (buffer1 && originalInterface) {
    buffer1.addEventListener("mouseover", () => {
        console.log("Mouse over event triggered on buffer");
        buffer1.querySelector("a").click();
    });

    buffer1.addEventListener("click", () => {
        console.log("Click event triggered on buffer");
        originalInterface.scrollIntoView({ behavior: "smooth" });
    });
} else {
    console.log("One or both elements not found.");
}

const buffer2 = document.getElementById("buffer-2");
const theDream = document.getElementById("original-interface");

if (buffer2 && theDream) {
    buffer2.addEventListener("mouseover", () => {
        console.log("Mouse over event triggered on buffer");
        buffer2.querySelector("a").click();
    });

    buffer2.addEventListener("click", () => {
        console.log("Click event triggered on buffer");
        theDream.scrollIntoView({ behavior: "smooth" });
    });
} else {
    console.log("One or both elements not found.");
}


