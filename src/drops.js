function close (event) {
    const button = event.target.parentElement.className;
    const parent = event.target.parentElement.parentElement.parentElement.className;
    if(button == "button") {
        const target = document.querySelector(`.${parent} .block_section`);
        target.classList.toggle("hidden");
    } 
}

window.addEventListener("click", close)