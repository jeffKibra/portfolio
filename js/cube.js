function viewCube(e) {
  console.log(e);
  switch (e.id) {
    case "up":
      $(".cube").css("transform", "translateZ(-100px) rotateX(-90deg)");

      break;
    case "down":
      $(".cube").css("transform", "translateZ(-100px) rotateX(90deg)");
      break;
    case "left":
      $(".cube").css("transform", "translateZ(-100px) rotateY(90deg)");
      break;
    case "right":
      $(".cube").css("transform", "translateZ(-100px) rotateY(-90deg)");
      break;
    case "front":
      $(".cube").css("transform", "translateZ(-100px) rotateY(0deg)");
      break;
    case "back":
      $(".cube").css("transform", "translateZ(-100px) rotateY(-180deg)");
      break;
    default:
      $(".cube").css(
        "transform",
        "translateZ(-100px) rotateX(-45deg) rotate3d(0, -1, 0, 45deg)"
      );
      break;
  }
}
function skillSelect(e) {
  const faces = [
    {
      side: "cube-front",
      frontEnd: {
        src: "./webpics/jquery.svg",
        alt: "jquery",
      },
      backEnd: {
        src: "./webpics/php.jpg",
        alt: "php",
      },
    },
    {
      side: "cube-down",
      frontEnd: {
        src: "./webpics/css3.svg",
        alt: "css3",
      },
      backEnd: {
        src: "./webpics/mysql.png",
        alt: "mysql",
      },
    },
    {
      side: "cube-left",
      frontEnd: {
        src: "./webpics/Bootstrap.png",
        alt: "bootstrap",
      },
      backEnd: {
        src: "./webpics/heroku.png",
        alt: "heroku",
      },
    },
    {
      side: "cube-right",
      frontEnd: {
        src: "./webpics/javascript.svg",
        alt: "vanila javascript",
      },
      backEnd: {
        src: "./webpics/firebase.png",
        alt: "firebase",
      },
    },
    {
      side: "cube-up",
      frontEnd: {
        src: "./webpics/material-ui.png",
        alt: "material ui",
      },
      backEnd: {
        src: "./webpics/node-js.svg",
        alt: "node js",
      },
    },
    {
      side: "cube-back",
      frontEnd: {
        src: "./webpics/react.svg",
        alt: "react",
      },
      backEnd: {
        src: "./webpics/apis.png",
        alt: "apis",
      },
    },
  ];
  switch (e.value) {
    case "back-end":
      faces.forEach((obj) => {
        const { src, alt } = obj.backEnd;
        $("#" + obj.side).attr({ src, alt, title: alt });
      });
      break;
    default:
      faces.forEach((obj) => {
        const { src, alt } = obj.frontEnd;
        $("#" + obj.side).attr({ src, alt, title: alt });
      });

      break;
  }
}
