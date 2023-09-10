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