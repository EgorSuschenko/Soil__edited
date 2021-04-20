const signForm = document.getElementById("input_container_sign")
const regForm = document.getElementById("input_container_reg")
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
signForm.onsubmit = (event) =>{
  event.preventDefault();
  document.location.href = "./dist/work-tab.html"
}
 
regForm.onsubmit = (event) =>{
  event.preventDefault();
  document.location.href = "./dist/work-tab.html"
}


const tryBtn = document.getElementById("try_button")

// tryBtn.onclick = function() {
//   modalReg.style.display = "block";
//   document.querySelector("body").style.overflow = "hidden" ;
// }
const tryPlan = document.getElementById("pricing_content");

// let selectedBtn;

tryPlan.onclick = function (event) {
  let target = event.target;
  console.log(target.tagName)
  if (target.tagName != 'BUTTON') return;
  delClick(target)
};

function delClick (button){
    modalReg.style.display = "block";
    document.querySelector("body").style.overflow = "hidden"
}