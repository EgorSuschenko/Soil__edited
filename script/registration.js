const modalReg = document.getElementById("regModal");
const btnReg = document.getElementById("registration");
const spanReg = document.getElementsByClassName("close_btn")[0];
btnReg.onclick = function() {
  modalReg.style.display = "block";
}

spanReg.onclick = function() {
  modalReg.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modalReg) {
    modalReg.style.display = "none";
  }
}