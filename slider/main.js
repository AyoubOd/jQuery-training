//image container variables
let slideNum = $(".slide-num");
let images = $(".img-container img");

//controls variables
let prevElement = $(".previous");
let nextElement = $(".next");
let pointers = $(".pointers ul li");
//creating an array from var pointes because indexOf() method is not available in pointers variable
let pointersArray = Array.from($(".pointers ul li"));

//globale variables
let current = 0;

//functions start

function checkFunction() {
  //checking if the first img is showing
  if (current === 0) {
    prevElement.addClass("blocked");
  } else {
    prevElement.removeClass("blocked");
  }

  //checking if the last img is showing
  if (current === 2) {
    nextElement.addClass("blocked");
  } else {
    nextElement.removeClass("blocked");
  }
}

//the main function responsible of navigation between images
function showingHiding() {
  images.eq(current).fadeIn(1000);
  pointers.eq(current).addClass("active");
  slideNum.text(`slide#${current + 1} of ${images.length}`);
  for (let i = 0; i < images.length; i++) {
    if (i != current) {
      images.eq(i).fadeOut(1000);
      pointers.eq(i).removeClass("active");
    }
  }
}

//functions end

//main code
showingHiding();
checkFunction();

nextElement.click(function () {
  current++;
  showingHiding();
  checkFunction();
});
prevElement.click(function () {
  current--;
  showingHiding();
  checkFunction();
});

for (let i = 0; i < images.length; i++) {
  pointers.eq(i).click(function () {
    //using indexOf() method to get the index of the clicked element
    current = pointersArray.indexOf(this);
    showingHiding();
    checkFunction();
  });
}
