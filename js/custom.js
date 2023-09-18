// navigation  menu js
// function openNav() {
//     document.getElementById("myNav").classList.toggle("menu_width");
//     document
//         .querySelector(".custom_menu-btn")
//         .classList.toggle("menu_btn-style");

// }

// Function untuk membuka menu
function openNav() {
  const menu = document.getElementById("myNav");
  const menuBtn = document.querySelector(".custom_menu-btn");

  // Toggle tampilan menu
  menu.classList.toggle("menu_width");
  menuBtn.classList.toggle("menu_btn-style");

  // Menambahkan event listener untuk menutup menu saat klik di luar menu
  document.addEventListener('click', closeNavOutside);

  // Menghentikan event klik pada tombol menu agar tidak menutup menu
  menuBtn.addEventListener('click', stopPropagation);
}

// Function untuk menutup menu
function closeNav() {
  const menu = document.getElementById("myNav");
  const menuBtn = document.querySelector(".custom_menu-btn");

  // Menghapus event listener untuk menutup menu saat klik di luar menu
  document.removeEventListener('click', closeNavOutside);

  // Menghapus event klik yang menghentikan penutupan menu
  menuBtn.removeEventListener('click', stopPropagation);

  // Menutup menu
  menu.classList.remove("menu_width");
  menuBtn.classList.remove("menu_btn-style");
}

// Function untuk menutup menu saat klik di luar menu
function closeNavOutside(event) {
  const menu = document.getElementById("myNav");
  const menuBtn = document.querySelector(".custom_menu-btn");

  if (!menu.contains(event.target) && event.target !== menuBtn) {
      closeNav();
  }
}

// Function untuk menghentikan penyebaran (propagation) klik pada tombol menu
function stopPropagation(event) {
  event.stopPropagation();
}


// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});

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

//navbar
var lastScrollTop; // This variable will store the top position
var navbar = document.getElementById('navbar'); // Get The NavBar
var isHovered = false; // Track hover state

// Function to handle the scroll event
function handleScroll() {
    if (!isHovered) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // This line will get the location on scroll

        if (scrollTop > lastScrollTop) {
            // If scrolling down
            navbar.style.top = '-80px';
        } else {
            // If scrolling up
            navbar.style.top = '0';
        }

        lastScrollTop = scrollTop; // New Position Stored
    }
}

// Function to handle hover
function handleHover() {
    navbar.style.top = '0'; // Show the navbar on hover
    isHovered = true; // Set hover state to true
}

// Function to handle mouse leave
function handleMouseLeave() {
    isHovered = false; // Set hover state to false
    // Reapply the scroll-based behavior if not hovering
    handleScroll();
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Attach hover and mouse leave event listeners
navbar.addEventListener('mouseenter', handleHover);
navbar.addEventListener('mouseleave', handleMouseLeave);


//pindah halaman tanpa load ulang
function loadPage(page) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
          document.getElementById("content").innerHTML = this.responseText;
      }
  };
  xhttp.open("GET", page, true);
  xhttp.send();
}

//darkmode
jQuery(document).ready(function ($) {
  const themeSwitch = document.querySelector("#toggle-theme");
  const body = document.querySelector(".light-theme-body");
  themeSwitch.addEventListener("change", () => {
    toggleRootClass();
  });
function toggleRootClass() {
  document.querySelector(".light-theme-body").classList.toggle("dark-theme-body");
}

  $("#toggle-theme").on("click", function () {
    $(this).parent().toggleClass("checked");
  });

});