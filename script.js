const cursor = document.getElementById("cursor");
const   random1 = document.getElementById("random1"),
        random2 = document.getElementById("random2"),
        random3 = document.getElementById("random3"),
        random4 = document.getElementById("random4"),
        random5 = document.getElementById("random5"),
        random6 = document.getElementById("random6"),
        random7 = document.getElementById("random7"),
        random8 = document.getElementById("random8");


window.onmousemove = function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    cursor.style.left = mouseX - cursorWidth / 2 + 'px';
    cursor.style.top = mouseY - cursorHeight / 2 + 'px';
  };

let randomPick = (ar) => {
    return ar[Math.floor(Math.random()*ar.length)];
}


let randomizeWord = () => {
    let str = "";
    let ar = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split('');
    return [randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar)].join('');
}

setInterval(()=>{
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