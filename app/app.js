// FAQ Accordion for the About Us Page
// function accordion() {
//   $(".accordion div").click(function (e) {
//     e.preventDefault();

//     var id = this.id;
//     console.log(id);

//     $(".accordion-content").each(function () {
//       if ($("#" + id).next()[0].id != this.id) {
//         $(this).slideUp();
//       }
//     });

//     $(this).next().toggle();
//   });
// }

// Controller - Gets data based on Listener
function initlisteners() {
  $("#nav .links a").click(function (e) {
    var btnID = this.id;
    MODEL.getContent(btnID);
  });
}

function initPage() {
  $.get("view/nav.html", function (nav) {
    $("#nav").html(nav);
    initlisteners();
  });

  $.get("view/home/home.html", function (data) {
    $("#app").html(data);
    // accordion();
  });

  $.get("view/footer.html", function (data) {
    $("#footer").html(data);
  });
}

$(document).ready(function () {
  initPage();
});
