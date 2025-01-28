const animation = (page) => {
  switch (page) {
    case "_login":
    case "_signup":
      $("form").children("div").css({ opacity: 0 }).animate({ opacity: 1 });
      break;
    case "_ready":
      $("#_ready").css({ opacity: 0 }).animate({ opacity: 1 });
      break;
    case "_result":
      $("#_result").css({ opacity: 0 }).animate({ opacity: 1 });
      break;
    default:
      break;
  }
};

export default animation;
