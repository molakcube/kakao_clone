const body = document.querySelector("main");

function close(event){
    const click = event.target;
    const findDad = click.parentNode.parentNode.parentNode.className;
    const arrow = document.querySelector(`.${findDad} .blocksection`);
    arrow.classList.toggle("hidden");
    console.log(arrow);
}

body.addEventListener("click", close);