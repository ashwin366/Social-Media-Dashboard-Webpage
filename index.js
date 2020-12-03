var checkbox = document.querySelector("input");

checkbox.addEventListener("change", function(e) {

  console.log(e);
  $("h1").toggleClass("toggle-h1");
  $("h5").toggleClass("toggle-h5");
  $("h2").toggleClass("toggle-h1");
  $(".dark").toggleClass("toggle-h1");
  $(".toggle").toggleClass("toggle-p");
  $(".top-item").toggleClass("card-toggle");
  $(".bottom-item-div").toggleClass("card-toggle");
  $(".top-bg").toggleClass("top-bg-toggle");
  $("body").toggleClass("body-bg");

})
