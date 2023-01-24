// scrolling experiencr

$("#navbar ul li a ,.btn").on("click", function (event) {
  if (this.hash !== "") {
    event.prevenDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
