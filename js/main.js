const button = document.querySelector("#popper-btn");
const tooltip = document.querySelector("#popper-tooltip");
Popper.createPopper(button, tooltip, {
  placement: "top",
});

function showPopper(e) {
  const visible = document.getElementById("popper-tooltip").style.visibility;
  if (visible === "visible") {
    $("#popper-tooltip").css("visibility", "hidden");
    $("#popper-btn").html('<i class="fas fa-bars"></i>');
  } else {
    $("#popper-tooltip").css("visibility", "visible");
    $("#popper-btn").html('<i class="fas fa-times"></i>');
  }
}

function scroller(e) {
  console.log(e);
}

AOS.init({
  easing: "ease-in-out-sine",
});

$(document).ready(function () {
  $("#float").css("display", "none");
  $(document).on("scroll", (e) => {
    const scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 600) {
      $("#float").css("display", "flex");
    } else {
      $("#float").css("display", "none");
    }
  });

  $(".link-js").click((e) => {
    e.preventDefault();
    const href = e.target.href;
    const targetId = "#" + href.split("#")[1];
    const targetVal = $(targetId).offset().top;
    $("html, body").animate({ scrollTop: targetVal }, 1000);
  });

  $(".couresel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  });
});
