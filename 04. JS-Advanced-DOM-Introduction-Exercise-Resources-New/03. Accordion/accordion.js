function toggle() {
    let button=document.getElementsByClassName('button')[0];
    let content=document.getElementById('extra');

    button.textContent=button.textContent ==="More" ? "Less" : "More";
    content.style.display=content.style.display==="block"? "none" : "block";

}