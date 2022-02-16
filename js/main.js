//Footer
let year = document.getElementById("year");
let date = new Date()
year.innerText = date.getFullYear()

let toTop = document.getElementById("toTop")
toTop.addEventListener("click",()=> {
  window.scrollTo(0,0)
})
//Loading animations
// let animations = false;

// let html = document.getElementById("html")

// if(animations){
//   html.style.overflowY = "hidden"
// }
// else{
//   html.style.overflowY = "scroll"
// }

window.scrollTo(0,0)

//const animated = document.querySelector('.loading');

// animated.addEventListener('animationend', () => {
//   animated.style.display = "none"
//   html.style.overflowY = "scroll"
// });

///Work Expansion
let items = document.querySelectorAll(".list-group-item");
items.forEach(title => {
    title.addEventListener("click", ()=> {
        title.querySelector(".fa-angle-down").style.transform += "rotate(180deg)"
        title.querySelector(".work-info").classList.toggle("d-none");
    })
});


///Gallery
let years = document.querySelectorAll(".years");
let img = document.querySelectorAll(".img-div");

years.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(10);
    let a = e.id;
    img.forEach((el) => {
        el.style.display="inline-block";
    // console.log(el.getAttribute("data-attr"));
      if (el.getAttribute("data-attr") != a) {
        el.style.display = "none";
      }
    });
  });
});

function makeActive(clicked_id){
  let id = clicked_id;

  let buttonsArray = ["2017","2018","2019","2020","2021"];
 buttonsArray = buttonsArray.filter(function(item) {
    return item !== id;
})

  document.getElementById(id).classList.add("active")
  buttonsArray.forEach( element => {
      document.getElementById(element).classList.remove("active")
  }
  )
  buttonsArray = ["2017","2018","2019","2020","2021"];
}

document.getElementById("2021").click()