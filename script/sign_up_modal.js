const signForm = document.getElementById("input_container_sign")
// const signBtn = document.getElementById("form_sign_submit")
const regBtnForm = document.getElementById("form_reg_submit")

const modalReg = document.getElementById("regModal");
const btnReg = document.getElementById("registration");
const spanReg = document.getElementsByClassName("close_btn")[0];

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  document.querySelector("body").style.overflow = "hidden" 
}

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = "inherit"
}

window.onclick = (event) => {
  if (event.target == modal || event.target == modalReg) {
    modal.style.display = "none";
    modalReg.style.display = "none";
    document.querySelector("body").style.overflow = "inherit"
  }
}

btnReg.onclick = function() {
  modalReg.style.display = "block";
  modal.style.display = "none";
}

spanReg.onclick = function() {
  modalReg.style.display = "none";
  document.querySelector("body").style.overflow = "inherit"
}
function signFunc(e){
  if (e.submitted)
  document.location.href = "./dist/work-tab.html"
}
 
 regBtnForm.onsubmit = () =>{
   document.location.href = "./dist/work-tab.html"
 }

//  window.onclick = (event) => {
//   if (event.target == modalReg) {
//     modalReg.style.display = "none";
//   }
//  }