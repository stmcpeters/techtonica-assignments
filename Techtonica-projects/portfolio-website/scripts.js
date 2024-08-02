// the modal
// get the modal
let modal = document.getElementById("myModal");
          // console.log(modal);
// get the button that opens the modal
var btn = document.getElementById("myBtn");
          // console.log(btn);
// get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];
          // console.log(span);
// when button loads, open the modal
window.onload = function() {
  modal.style.display = "block";
}
// when use clicks on span (x), close the modal
span.onclick = function() {
  modal.style.display = none;
}
// when user clicks outside of modal, close modal
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = "none";
  }
}