let contain = document.querySelector(".demo");
let cat = localStorage.getItem("userEmail");
console.log(cat);

function display() {
  let cartona = "";
  cartona += `<div class='d-flex align-items-center flex-wrap justify-content-center'>
  <img src="imgs/undraw_stars_re_6je7__10_-removebg-preview.png"  width="100" alt="">

  <p class="navbar-brand pt-3" href="#">${cat}</p></div>
  
    <button onclick='backlogin()'>Logout</button>`;
  if (contain) {
    contain.innerHTML = cartona;
  }
}
display();
function backlogin() {
  window.location.replace("index.html");
}
