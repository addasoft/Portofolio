 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
window.onload = function() {
    // Get the button:
    let mybutton = document.getElementById("myBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = topFunction;
    
  }
 

  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (x.length === 0 || dots.length === 0) {
    console.log("No elements found with class 'mySlides' or 'demo'");
    return;
  }

  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  if (x[slideIndex - 1]) {
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
  } else {
    console.log("Invalid slideIndex");
  }
}
showDivs(1);


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
