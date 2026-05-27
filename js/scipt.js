const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
let div = document.querySelector("div");
let links = document.querySelector(".linkss");


function showAlert(message,className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(()=> document.querySelector(".alert").remove(),10000);
 
}

//show reveal
ScrollReveal().reveal('.more__about-section');

// show month

const changeMonth = document.querySelector(".change-month")
const today = new Date();
let getMonths = today.getMonth();
const month = ["January","February", "March", "April","May","June","July","August","September","October","November","December"];
let currentMonth = month[today.getMonth()];
changeMonth.textContent = currentMonth;


// navbar


document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
  
  
      })
    });
  
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end


  // topbanner close function

  const closeBtn = document.querySelector(".close-button");
  const techP = document.querySelector(".tech-pro-p");


function topbarClose() {
  
  const topbanner = document.querySelector(".top-banner");
  topbanner.classList.add('hidden');
      console.log("we are here");
}
//    closeBtn.addEventListener("click",closeTopBanner);

// function closeTopBanner() {
//   alert("hello");
//   console.log("workings!!!")
//       // topbanner.classList.add('hide') 
//   }


// links.addEventListener("click", ()=>{
//     // const p = document.createElement("p");
//     // p.appendChild(document.createTextNode("writing some stuff"));
//     // div.appendChild(p)

//     const divs = document.createElement("p");
//     divs.className = "styleDivs";
//     divs.appendChild(document.createTextNode("Wriiting"));
//     div.appendChild(divs);

// })

// button2.addEventListener("click",(e)=>{
//     e.preventDefault;
//      links.document.style.display = "none"
// })


// const item = [
//   { name: 'bike' , price : 100 },
//   { name: 'TV' , price : 200 },
//   { name: 'Album' , price : 10 },
//   { name: 'book' , price : 5 },
//   { name: 'phone' , price : 500 },
//   { name: 'Computer' , price : 1000 },
//   { name: 'Keyboard' , price : 5 },

// ]
//  item.forEach((item) => {
//     console.log(item.price)
//  })

let closeTopBar = document.getElementById("#close");
closeTopBanner.addEventListener("click", () => {
  alert("Do you want to close me?");
})

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


