const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// const chevDown = document.querySelector(".down");
// const chevUp = document.querySelector(".up-chevron");

// chevDown.addEventListener("click", () =>{
//     for(i=0;i<=chevDown.length; i++){
//         chevDown.classList.add('show')
//     }
// })